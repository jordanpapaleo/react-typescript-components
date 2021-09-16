import React from 'react'
import TextArea from './TextArea'
import notes from './textArea.md'

export default {
  title: 'Forms/TextArea',
  component: TextArea,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const TextAreaExample = () => (
  <div>
    <TextArea
      placeholder="hello"
      style={{ marginBottom: 15 }}
      label="Optional label"
    />
    <TextArea
      placeholder="hello disabled"
      disabled
      style={{ marginBottom: 15 }}
    />
    <TextArea
      placeholder="rut roh error"
      error
      style={{ marginBottom: 15 }}
      label="Optional label"
    />
    <TextArea
      placeholder="rut roh error"
      error="Optional Error messages"
      style={{ marginBottom: 15 }}
    />
  </div>
)
