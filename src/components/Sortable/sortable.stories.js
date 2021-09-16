import React from 'react'
import Sortable from './Sortable'
import notes from './sortable.md'

export default {
  title: 'Components/Sortable',
  component: Sortable,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const SortableExample = () => <Sortable>todo</Sortable>
