import React from 'react'
import FormLabel from './FormLabel'
import notes from './formLabel.md'

export default {
  title: 'Forms/FormLabel',
  component: FormLabel,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const FormLabelExample = () => (
  <div>
    <FormLabel
      label="Label for Success"
      labelAux="Aux label"
      variant="success"
    />
    <FormLabel
      label={<strong>Passing a Node for a warning</strong>}
      variant="warning"
    />
    <FormLabel label="Label Info" labelAux="Aux label" variant="info" />
    <FormLabel label="Label Error" labelAux="Aux label" variant="error" />
    <FormLabel label="Label Default" labelAux="Aux label" variant="default" />
  </div>
)
