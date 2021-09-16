import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import notes from './toggleSwitch.md'

export default {
  title: 'Forms/ToggleSwitch',
  component: ToggleSwitch,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const ToggleSwitchExample = () => (
  <div>
    <h2>Normal use</h2>

    <ToggleSwitch
      label="Optional label"
      options={[
        { label: 'White', value: 'white' },
        { label: 'Black', value: 'black' },
      ]}
      style={{ marginBottom: 15 }}
    />

    <h2>Disabled states</h2>

    <ToggleSwitch
      label="Disabled Toggle"
      disabled
      options={[
        { label: 'White', value: 'white' },
        { label: 'Black', value: 'black' },
      ]}
      style={{ marginBottom: 15 }}
      value="black"
    />

    <ToggleSwitch
      label="Disabled Toggle"
      disabled
      options={[
        { label: 'White', value: 'white' },
        { label: 'Black', value: 'black' },
      ]}
      style={{ marginBottom: 15 }}
      value="white"
    />

    <h2>Optional labels</h2>

    <ToggleSwitch
      options={[{ value: 'white' }, { label: 'Black', value: 'black' }]}
      style={{ marginBottom: 15 }}
      value="black"
    />

    <ToggleSwitch
      options={[{ label: 'White', value: 'white' }, { value: 'black' }]}
      style={{ marginBottom: 15 }}
      value="white"
    />
  </div>
)
