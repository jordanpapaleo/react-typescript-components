import React from 'react'
import EditableText from './EditableText'
import notes from './editableText.md'

export default {
  title: 'Forms/EditableText',
  component: EditableText,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const EditableTextExample = () => <EditableText>todo</EditableText>
