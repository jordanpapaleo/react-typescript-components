import React from 'react'
import Loader from './Loader'
import notes from './loader.md'

export default {
  title: 'Components/Loader',
  component: Loader,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const LoaderExample = () => <Loader>todo</Loader>
