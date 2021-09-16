import React from 'react'
import Calendar from './Calendar'
import notes from './calendar.md'

export default {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const Docs = () => <div />
export const BasicCalendar = () => (
  <Calendar
    onChange={(value) => {
      console.log(value, value instanceof Date)
    }}
  />
)
export const PassSelection = () => (
  <Calendar value={new Date('April 21 2020')} />
)
export const RestrictMinDate = () => (
  <Calendar
    minDate={new Date('April 17 2020')}
    value={new Date('April 22 2020')}
  />
)
export const RestrictMaxDate = () => (
  <Calendar
    maxDate={new Date('April 27 2020')}
    value={new Date('April 22 2020')}
  />
)
export const RestrictMinMaxDate = () => (
  <Calendar
    todayLink
    maxDate={new Date('April 27 2020')}
    minDate={new Date('April 17 2020')}
    value={new Date('April 22 2020')}
  />
)
