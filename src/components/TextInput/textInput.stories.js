import React from 'react'
import TextInput from './TextInput'
import notes from './textInput.md'
import Icon from '../Icon'

export default {
  title: 'Forms/TextInput',
  component: TextInput,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const TextInputExample = () => (
  <div>
    <h3>Default</h3>
    <TextInput
      placeholder="hello"
      style={{ marginBottom: 15 }}
      label="Text input label"
    />
    <TextInput
      placeholder="hello disabled"
      label="Disabled"
      disabled
      style={{ marginBottom: 15 }}
      prefix={<Icon type="calendar" />}
    />
    <TextInput
      placeholder="rut roh error"
      error
      style={{ marginBottom: 15 }}
      label="Text input label"
      suffix={<Icon type="calendar" />}
    />
    <TextInput
      placeholder="rut roh error"
      error="This is a test of the emergency broadcast system"
      style={{ marginBottom: 15 }}
      label="Text input label"
    />
    <TextInput
      placeholder="Label and aux label"
      label="Label"
      labelAux="Aux Label"
    />
    <TextInput placeholder="Aux label" labelAux="Aux Label" />
    <TextInput
      placeholder="Aux label component"
      labelAux={<div>Aux Component</div>}
    />
    <TextInput placeholder="Label component" label={<div>Component</div>} />

    <h3>Borderless</h3>
    <TextInput
      placeholder="hello"
      style={{ marginBottom: 15 }}
      label="Normal Label"
      inputStyle="borderless"
    />
    <TextInput
      placeholder="hello disabled"
      style={{ marginBottom: 15 }}
      disabled
      inputStyle="borderless"
    />
    <TextInput
      placeholder="hello error"
      style={{ marginBottom: 15 }}
      label="Error Label"
      inputStyle="borderless"
      error
      value="this is bad text"
    />
    <TextInput
      placeholder="hello error"
      style={{ marginBottom: 15 }}
      label="Error Label"
      inputStyle="borderless"
      error="This is a test of the emergency broadcast system"
      value="this is bad text"
    />
  </div>
)
