/* eslint-disable import/no-duplicates */
import add from 'date-fns/add'
import format from 'date-fns/format'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import isAfter from 'date-fns/isAfter'
import isBefore from 'date-fns/isBefore'
import isSameDay from 'date-fns/isSameDay'
import set from 'date-fns/set'
import startOfMonth from 'date-fns/startOfMonth'
import sub from 'date-fns/sub'

export type CalendarDayT = {
  date: number
  disabled: boolean
  selected: boolean
  today: boolean
  type: 'prevMonthDay' | 'day' | 'nextMonthDay'
}

type NullableDateT = Date | null

export type CalendarWeekT = CalendarDayT[]
export type CalendarMatrixT = CalendarWeekT[]

const today = new Date()

export function getIsDisabled({
  date,
  maxDate,
  minDate,
}: {
  date: Date
  maxDate: NullableDateT
  minDate: NullableDateT
}): boolean {
  if (maxDate && minDate) {
    const isMaxDisabled = isSameDay(date, maxDate)
      ? false
      : isAfter(date, maxDate)

    const isMinDisabled = isSameDay(date, minDate)
      ? false
      : isBefore(date, minDate)

    return isMaxDisabled || isMinDisabled
  } else if (maxDate) {
    return isSameDay(date, maxDate) ? false : isAfter(date, maxDate)
  } else if (minDate) {
    return isSameDay(date, minDate) ? false : isBefore(date, minDate)
  } else {
    return false
  }
}

export function getPreviousMonthDays({
  daysInLastMonth,
  firstDayOfMonth,
  lastMonth,
  maxDate,
  minDate,
}: {
  daysInLastMonth: number
  firstDayOfMonth: number
  lastMonth: Date
  maxDate: NullableDateT
  minDate: NullableDateT
}): CalendarWeekT {
  const days: CalendarWeekT = []

  for (let i = 0, k = firstDayOfMonth; i < k; i++) {
    const date = daysInLastMonth - firstDayOfMonth + (i + 1)

    days.push({
      date,
      disabled: getIsDisabled({
        minDate,
        maxDate,
        date: set(lastMonth, { date }),
      }),
      selected: false,
      today: false,
      type: 'prevMonthDay',
    })
  }

  return days
}

export function getCurrentMonthDays({
  activeMonth,
  daysInMonth,
  maxDate,
  minDate,
  selectedDay,
}: {
  activeMonth: Date
  daysInMonth: number
  maxDate: NullableDateT
  minDate: NullableDateT
  selectedDay: NullableDateT
}): CalendarWeekT {
  const days: CalendarWeekT = []

  for (let i = 0, k = daysInMonth; i < k; i++) {
    const date = i + 1
    const testDate = set(activeMonth, { date })
    const disabled = getIsDisabled({ minDate, maxDate, date: testDate })

    days.push({
      date: i + 1,
      disabled,
      selected: selectedDay ? isSameDay(testDate, selectedDay) : false,
      today: isSameDay(testDate, today),
      type: 'day',
    })
  }

  return days
}

export function getNextMonthDays({
  minDate,
  maxDate,
  nextMonth,
  nextMonthDays,
}: {
  minDate: NullableDateT
  maxDate: NullableDateT
  nextMonth: Date
  nextMonthDays: number
}): CalendarWeekT {
  const days: CalendarWeekT = []

  for (let i = 0; i < nextMonthDays; i++) {
    days.push({
      date: i + 1,
      disabled: getIsDisabled({
        minDate,
        maxDate,
        date: set(nextMonth, { date: i + 1 }),
      }),
      selected: false,
      today: false,
      type: 'nextMonthDay',
    })
  }

  return days
}

export function getCalendarMatrix({
  days,
  maxDate,
  minDate,
  nextMonth,
}: {
  days: CalendarDayT[]
  maxDate: NullableDateT
  minDate: NullableDateT
  nextMonth: Date
}): CalendarMatrixT {
  const calendarMatrix: CalendarMatrixT = []
  let week: CalendarDayT[] = []

  days.forEach((day, i) => {
    if (i !== 0 && i % 7 === 0) {
      calendarMatrix.push(week)
      week = [day]
    } else {
      week.push(day)
    }

    if (i === days.length - 1) {
      calendarMatrix.push(week)
    }
  })

  // fill last week
  const nextMonthDays = getNextMonthDays({
    maxDate,
    minDate,
    nextMonth,
    nextMonthDays: 7 - calendarMatrix[calendarMatrix.length - 1].length,
  })

  calendarMatrix[calendarMatrix.length - 1] = [
    ...calendarMatrix[calendarMatrix.length - 1],
    ...nextMonthDays,
  ]

  return calendarMatrix
}

export function getRows({
  activeMonth,
  maxDate,
  minDate,
  selectedDay,
}: {
  activeMonth: Date
  maxDate: NullableDateT
  minDate: NullableDateT
  selectedDay: NullableDateT
}): CalendarMatrixT {
  const daysInMonth = getDaysInMonth(activeMonth)
  const lastMonth = sub(activeMonth, { months: 1 })
  const nextMonth = add(activeMonth, { months: 1 })
  const daysInLastMonth = getDaysInMonth(lastMonth)
  const firstDayOfMonth = startOfMonth(activeMonth)
  const prevMonth = getPreviousMonthDays({
    daysInLastMonth,
    // $FlowFixMe the bitwise operator will parse a string into an int always
    firstDayOfMonth: ~~format(firstDayOfMonth, 'e') - 1,
    lastMonth,
    maxDate,
    minDate,
  })

  const calendarDays = getCurrentMonthDays({
    activeMonth,
    daysInMonth,
    maxDate,
    minDate,
    selectedDay,
  })

  const calendarMatrix = getCalendarMatrix({
    days: [...prevMonth, ...calendarDays],
    maxDate,
    minDate,
    nextMonth,
  })

  return calendarMatrix
}
