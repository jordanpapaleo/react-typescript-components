import * as React from 'react'
import classnames from 'classnames'
import sortBy from 'lodash/sortBy'

import {
  DefaultComponentPropI,
  RenderOverrideT,
  RenderOverrideMapI,
  StyleT,
} from '../../types/base.types'
import { colors } from '../../common/colors'
import { toQaId } from '../../common/formats'
import Icon from '../Icon'
import Tooltip from '../Tooltip'
// import styles from './table.module.css'
import Table from './Table'
import TextInput from '../TextInput'
import usePageScroll from 'hooks/usePageScroll'

export type HeaderT = {
  label: string | number | React.ReactNode
  sortable?: boolean
  sortBy: string
  value: string
  style?: StyleT
  tooltip?: string
}

export type RowT = {
  id: number
  [headerKey: string]: string | number
}

export interface PropI extends DefaultComponentPropI {
  defaultSort?: string
  filterKeys?: string[]
  headers?: HeaderT[]
  isLoading?: boolean
  lazyload?: number
  loadingDataMessage?: string
  nullDataMessage?: string
  renderOverride?: RenderOverrideMapI
  resetPagingProp?: number
  rows?: RowT[]
  rowKeyOverride?: (row: RowT) => string
  sortAscending?: true
  style?: StyleT
}

export function sortFilter(
  rows: any[] = [],
  sort: string,
  sortAsc: boolean,
  filter?: string,
  filterKeys?: string[],
): any[] {
  const filteredRows = rows.filter((row) =>
    filter && filterKeys
      ? filterKeys.some((key) => {
        const searchableField = `${row[key]}`.toLowerCase()
        return searchableField.includes(filter.toLowerCase())
      })
      : true,
  )

  const sortedRows = sortBy(filteredRows, sort)

  if (!sortAsc) {
    sortedRows.reverse()
  }

  return sortedRows
}

type StateT = {
  filter: string
  page: number
  resetPaging: number
  sort: string
  sortAsc: boolean
}

type UpgadeT = {
  filter?: string
  page?: number
  sort?: string
  sortAsc?: boolean
  resetPaging?: number
}

const reducer = (state: StateT, update: UpgadeT): StateT => ({
  ...state,
  ...update,
})

const InteractiveTable: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
    defaultSort = '',
    filterKeys,
    headers = [],
    isLoading = false,
    lazyload,
    loadingDataMessage = 'Loading results, please wait.',
    nullDataMessage = 'No results.',
    renderOverride = {},
    resetPagingProp = 0,
    rows = [],
    rowKeyOverride,
    sortAscending = true,
    style = {},
  } = props

  const qaId = toQaId({ parentId: dataQaId, componentId: 'InteractiveTable' })
  const [state, dispatch] = React.useReducer(reducer, {
    filter: '',
    page: 1,
    sort: defaultSort,
    sortAsc: sortAscending,
    resetPaging: resetPagingProp,
  })

  const columnOrder = headers.reduce(
    (acc: string[], next: HeaderT) => [...acc, next.value],
    [],
  )
  const scroll = usePageScroll()

  React.useEffect(() => {
    if (resetPagingProp !== state.resetPaging) {
      dispatch({
        page: 1,
        resetPaging: resetPagingProp,
      })
    }
  }, [resetPagingProp])

  React.useEffect(() => {
    if (window.innerHeight + scroll.y + 100 >= document.body.scrollHeight) {
      dispatch({ page: state.page + 1 })
    }
  }, [scroll])

  const handleSetFilter = (se: React.SyntheticEvent) => {
    dispatch({
      page: 1,
      // @ts-ignore
      filter: se.target.value,
    })
  }

  const handleHeaderClick = (i: number) => (se: React.SyntheticEvent) => {
    se.preventDefault()

    const clickedHeader = headers[i]
    const newSort = clickedHeader.sortBy || clickedHeader.value

    if (newSort === state.sort) {
      dispatch({
        page: 1,
        sortAsc: !state.sortAsc,
      })
    } else {
      dispatch({
        page: 1,
        sort: newSort,
        sortAsc: true,
      })
    }
  }

  const sortedFilteredRows = React.useMemo(() => {
    return sortFilter(rows, state.sort, state.sortAsc, state.filter, filterKeys)
  }, [rows, state.filter, state.sort, state.sortAsc])

  const pagedRows = lazyload
    ? sortedFilteredRows.slice(0, lazyload * state.page)
    : sortedFilteredRows

  return (
    <div
      className={classnames('InteractiveTable-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      {filterKeys && (
        <div className="table-controls">
          {filterKeys && (
            <TextInput
              className="table-filter"
              data-qa-id={toQaId({ componentId: qaId, useId: 'table-filter' })}
              onChange={handleSetFilter}
              placeholder={`Search by ${filterKeys.join(', ')}`}
              prefix={
                <Icon type="searchicon" style={{ color: colors.border }} />
              }
              value={state.filter}
            />
          )}
        </div>
      )}

      <Table data-qa-id={qaId}>
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((header, i) => (
                <Th
                  key={header.value}
                  label={header.label}
                  onClick={handleHeaderClick(i)}
                  sort={state.sort}
                  sortable={header.sortable}
                  sortAsc={state.sortAsc}
                  style={header.style}
                  tooltip={header.tooltip}
                  value={header.value}
                />
              ))}
            </tr>
          </thead>
        )}

        {pagedRows.length > 0 && (
          <tbody>
            {pagedRows.map((row: RowT, i: number) => (
              <Tr
                columnOrder={columnOrder}
                key={rowKeyOverride ? rowKeyOverride(row) : row.id}
                renderOverride={renderOverride}
                row={row}
                rowIndex={i}
              />
            ))}
          </tbody>
        )}
      </Table>

      {(!sortedFilteredRows || sortedFilteredRows.length === 0) &&
        !isLoading && <p className="null-data-message">{nullDataMessage}</p>}

      {isLoading && (
        <p className="loading-data-message">{loadingDataMessage}</p>
      )}
    </div>
  )
}

export const Th = React.memo(
  ({
    label,
    onClick,
    sort,
    sortable,
    sortAsc,
    style,
    tooltip,
    value,
  }: {
    label: React.ReactNode
    onClick: (se: React.SyntheticEvent) => void
    sort: string
    sortable?: boolean
    sortAsc: boolean
    style?: StyleT
    tooltip?: string
    value: string
  }) => (
    <th key={value} style={style} className="Th-component">
      {sortable
        ? (
        <a
          onClick={onClick}
          style={{
            cursor: 'pointer',
            color: colors.defaultText,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ marginRight: 10, display: 'inline-block' }}>
            {label}
          </span>
          {value === sort && sortAsc && <Icon type="chevronup" />}
          {value === sort && !sortAsc && <Icon type="chevrondown" />}
          {value !== sort && <Icon type="chevrondown" />}
        </a>
          )
        : (
            label
          )}

      {tooltip && (
        <Tooltip
          tip={tooltip}
          style={{ marginLeft: 5, minWidth: 200 }}
          placement="bottom-end"
        >
          <Icon type="infocircle" />
        </Tooltip>
      )}
    </th>
  ),
)

Th.displayName = 'Th'

export const Tr = React.memo(
  ({
    columnOrder,
    renderOverride,
    row,
    rowIndex,
  }: {
    columnOrder: string[]
    renderOverride: RenderOverrideMapI
    row: RowT
    rowIndex: number
  }) => {
    return (
      <tr className="Tr-component">
        {columnOrder.map((column, j: number) => (
          <Td
            columnIndex={j}
            key={column}
            override={renderOverride[column]}
            row={row}
            rowIndex={rowIndex}
            value={row[column]}
          />
        ))}
      </tr>
    )
  },
)

Tr.displayName = 'Tr'

export const Td = React.memo(
  ({
    columnIndex,
    override,
    row,
    rowIndex,
    value: valueProp,
  }: {
    columnIndex: number
    override?: RenderOverrideT
    row: RowT
    rowIndex: number
    value: string | number
  }) => {
    let value: React.ReactNode = valueProp

    try {
      if (override) {
        value = override({ row, rowIndex, columnIndex })
      }
    } catch (err) {
      console.log(err)
    }

    return (
      <td className="Td-component">
        {value}
      </td>
    )
  },
)

Td.displayName = 'Td'

export const MemoInteractiveTable = React.memo(InteractiveTable)

export default InteractiveTable
