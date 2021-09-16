// @ts-nocheck
import { getIsDisabled, getRows } from './calendarUtils'

describe('Calendar: getIsDisabled', () => {
  const minDate = new Date('04/20/2020')
  const maxDate = new Date('04/22/2020')

  it('should disable dates before a min date', () => {
    expect(getIsDisabled({ minDate, date: new Date('04/19/2020') })).toBe(true)
    expect(getIsDisabled({ minDate, date: new Date('04/20/2020') })).toBe(false)
    expect(getIsDisabled({ minDate, date: new Date('04/21/2020') })).toBe(false)
  })

  it('should disable dates after a max date', () => {
    expect(getIsDisabled({ maxDate, date: new Date('04/23/2020') })).toBe(true)
    expect(getIsDisabled({ maxDate, date: new Date('04/22/2020') })).toBe(false)
    expect(getIsDisabled({ maxDate, date: new Date('04/21/2020') })).toBe(false)
  })

  it('should disable dates before a min date and after a max date', () => {
    expect(
      getIsDisabled({ maxDate, minDate, date: new Date('04/23/2020') }),
    ).toBe(true)
    expect(
      getIsDisabled({ maxDate, minDate, date: new Date('04/22/2020') }),
    ).toBe(false)
    expect(
      getIsDisabled({ maxDate, minDate, date: new Date('04/21/2020') }),
    ).toBe(false)
    expect(
      getIsDisabled({ maxDate, minDate, date: new Date('04/20/2020') }),
    ).toBe(false)
    expect(
      getIsDisabled({ maxDate, minDate, date: new Date('04/19/2020') }),
    ).toBe(true)
  })

  it('should not disable if there is not a min or max date', () => {
    expect(getIsDisabled({ date: new Date('04/21/2020') })).toBe(false)
  })
})

describe('Calendar: getRows', () => {
  const activeMonth = new Date('04/01/2020')
  const minDate = new Date('04/20/2020')
  const maxDate = new Date('04/22/2020')
  const selectedDay = new Date('04/21/2020')

  it('should getRows', () => {
    const rows = getRows({
      activeMonth,
      minDate,
      maxDate,
      selectedDay,
    })

    expect(rows).toMatchObject(rowOutput)
  })
})

const rowOutput = [
  [
    {
      date: 29,
      disabled: true,
      selected: false,
      today: false,
      type: 'prevMonthDay',
    },
    {
      date: 30,
      disabled: true,
      selected: false,
      today: false,
      type: 'prevMonthDay',
    },
    {
      date: 31,
      disabled: true,
      selected: false,
      today: false,
      type: 'prevMonthDay',
    },
    {
      date: 1,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 2,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 3,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 4,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
  ],
  [
    {
      date: 5,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 6,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 7,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 8,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 9,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 10,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 11,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
  ],
  [
    {
      date: 12,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 13,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 14,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 15,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 16,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 17,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 18,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
  ],
  [
    {
      date: 19,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 20,
      disabled: false,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 21,
      disabled: false,
      selected: true,
      today: false,
      type: 'day',
    },
    {
      date: 22,
      disabled: false,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 23,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 24,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 25,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
  ],
  [
    {
      date: 26,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 27,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 28,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 29,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 30,
      disabled: true,
      selected: false,
      today: false,
      type: 'day',
    },
    {
      date: 1,
      disabled: true,
      selected: false,
      today: false,
      type: 'nextMonthDay',
    },
    {
      date: 2,
      disabled: true,
      selected: false,
      today: false,
      type: 'nextMonthDay',
    },
  ],
]
