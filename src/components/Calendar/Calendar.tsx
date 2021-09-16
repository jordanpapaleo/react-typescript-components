/* eslint-disable import/no-duplicates */
import * as React from 'react'
import add from 'date-fns/add'
import classnames from 'classnames'
import format from 'date-fns/format'
import isSameDay from 'date-fns/isSameDay'
import set from 'date-fns/set'
import sub from 'date-fns/sub'

import { DefaultComponentPropI } from '../../types/base.types'
import { getRows } from './calendarUtils'
import { toQaId } from '../../common/formats'
import styles from './calendar.module.css'

export interface PropI extends DefaultComponentPropI {
  maxDate?: Date
  minDate?: Date
  onChange: (arg0: Date | null) => void
  todayLink?: boolean
  value?: Date
}

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

type StateT = {
  activeMonth: Date
  maxDate: Date | null
  minDate: Date | null
  selectedDay: Date | null
}

type UpdateT = {
  activeMonth?: Date
  maxDate?: Date | null
  minDate?: Date | null
  selectedDay?: Date | null
}

const reducer = (state: StateT, update: UpdateT): StateT => ({
  ...state,
  ...update,
})

const Calendar = React.forwardRef<HTMLInputElement, PropI>(
  (props, ref) => {
    const {
      'data-qa-id': dataQaId,
      className,
      maxDate: maxDateProps,
      minDate: minDateProps,
      onChange,
      style = {},
      todayLink = false,
      value: valueProps = null,
    } = props
    const qaId = toQaId({ parentId: dataQaId, componentId: 'Calendar' })
    const [state, dispatch] = React.useReducer(reducer, {
      activeMonth: valueProps || new Date(),
      maxDate: maxDateProps || null,
      minDate: minDateProps || null,
      selectedDay: valueProps || null,
    })

    const { activeMonth, maxDate, minDate, selectedDay } = state

    React.useEffect(() => {
      if (!valueProps) {
        dispatch({ selectedDay: null })
      } else if (
        state.selectedDay &&
        !isSameDay(valueProps, state.selectedDay)
      ) {
        dispatch({ selectedDay: valueProps })
      }
    }, [valueProps])

    React.useEffect(() => {
      if (!minDateProps) {
        dispatch({ minDate: null })
      } else if (state.minDate && !isSameDay(minDateProps, state.minDate)) {
        dispatch({ minDate: minDateProps })
      }
    }, [minDateProps])

    React.useEffect(() => {
      if (!maxDateProps) {
        dispatch({ maxDate: null })
      } else if (state.maxDate && !isSameDay(maxDateProps, state.maxDate)) {
        dispatch({ maxDate: maxDateProps })
      }
    }, [maxDateProps])

    const handlePrev = () => {
      dispatch({ activeMonth: sub(activeMonth, { months: 1 }) })
    }

    const handleNext = () => {
      dispatch({ activeMonth: add(activeMonth, { months: 1 }) })
    }

    const handleDaySelect = (
      date: number,
      disabled: boolean,
      type: 'prevMonthDay' | 'nextMonthDay' | string,
    ) => {
      console.log('date', date, typeof date)
      if (disabled) {
        return
      }

      let selectedDay

      if (type === 'prevMonthDay') {
        const temp = sub(activeMonth, { months: 1 })
        selectedDay = set(temp, { date })
      } else if (type === 'nextMonthDay') {
        const temp = add(activeMonth, { months: 1 })
        selectedDay = set(temp, { date })
      } else {
        selectedDay = set(activeMonth, { date })
      }

      dispatch({
        selectedDay,
        activeMonth: selectedDay,
      })

      if (onChange) {
        if (selectedDay) {
          onChange(selectedDay)
        } else {
          onChange(null)
        }
      }
    }

    const rows = getRows({ activeMonth, maxDate, minDate, selectedDay })
    const month = format(activeMonth, 'MMMM')
    const year = format(activeMonth, 'yyyy')

    return (
      <div
        ref={ref}
        className={classnames('Calendar-component', className, styles.calendar)}
        style={style}
        data-qa-id={qaId}
      >
        <header className={styles.header}>
          <button
            data-qa-id={toQaId({ componentId: qaId, useId: 'PrevMonth' })}
            onClick={handlePrev}
            style={{ textAlign: 'left' }}
            type="button"
          >
            &lt;
          </button>
          <span className={styles.calendarLabel}>
            {month} {year}
          </span>
          <button
            data-qa-id={toQaId({ componentId: qaId, useId: 'NextMonth' })}
            onClick={handleNext}
            style={{ textAlign: 'right' }}
            type="button"
          >
            &gt;
          </button>
        </header>

        <header className={styles.dayNames}>
          {WEEKDAYS.map((day, i) => (
            <div key={i}>{day}</div>
          ))}
        </header>

        <div className={styles.days}>
          {rows.map((row) =>
            row.map((cell) => {
              const passive =
                cell.type === 'prevMonthDay' || cell.type === 'nextMonthDay'

              return (
                <div
                  key={month + cell.date}
                  className={classnames(styles.day, {
                    [styles.dayDisabled]: cell.disabled,
                    [styles.dayPassive]: passive,
                    [styles.daySelected]: cell.selected,
                    [styles.dayToday]: cell.today,
                  })}
                >
                  <span className={styles.dayUi} />
                  <button
                    data-qa-id={toQaId({
                      componentId: qaId,
                      useId: `${cell.type}${cell.date}`,
                    })}
                    className={styles.dayButton}
                    onClick={(se: React.SyntheticEvent) => {
                      handleDaySelect(~~cell.date, cell.disabled, cell.type)
                    }}
                    disabled={cell.disabled}
                    type="button"
                  >
                    {cell.date}
                  </button>
                </div>
              )
            }),
          )}
        </div>

        {todayLink && (
          <footer className={styles.footer}>
            <button
              className={styles.footerButton}
              onClick={() => {
                dispatch({ activeMonth: new Date() })
              }}
            >
              Today
            </button>
          </footer>
        )}
      </div>
    )
  },
)

export default Calendar
