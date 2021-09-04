import React from 'react'
import StyleDefaults from './StyleDefaults'
import notes from './styleDefaults.md'

export default {
  title: 'Components/StyleDefaults',
  component: StyleDefaults,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {},
}

export const StyleDefaultsExample = () => <StyleDefaults />
