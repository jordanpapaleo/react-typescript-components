import React from 'react'
import Progress from './Progress'
import notes from './progress.md'

export default {
  title: 'Components/Progress',
  component: Progress,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const ProgressExample = () => <Progress>todo</Progress>
