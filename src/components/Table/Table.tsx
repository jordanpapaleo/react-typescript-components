import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './table.module.css'

export interface PropI extends DefaultComponentPropI {}

const Table: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
    children,
    style = {},
    ...otherProps
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Table' })

  return (
    <table
      className={classnames('Table-component', className, styles.table)}
      data-qa-id={qaId}
      style={style}
      {...otherProps}
    >
      {children}
    </table>
  )
}

export default Table
