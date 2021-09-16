import React from 'react'
import Error from './Error'
import notes from './error.md'

export default {
  title: 'Forms/Error',
  component: Error,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const ErrorExample = () => <Error>todo</Error>
