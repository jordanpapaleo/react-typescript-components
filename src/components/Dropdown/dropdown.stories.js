import React from 'react'
import Dropdown from './Dropdown'
import notes from './dropdown.md'

export default {
  title: 'Forms/Dropdown',
  component: Dropdown,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const DropdownExample = () => (
  <div>
    <Dropdown
      label="Label 1"
      labelAux="Label 2"
      items={[
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 3 },
        { label: 'Four', value: 4 },
      ]}
    />

    <Dropdown
      label="Label Disabled"
      items={[
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 3 },
        { label: 'Four', value: 4 },
      ]}
      disabled
    />

    <Dropdown
      label="Label Error"
      items={[
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 3 },
        { label: 'Four', value: 4 },
      ]}
      error="Selection error"
    />
  </div>
)
