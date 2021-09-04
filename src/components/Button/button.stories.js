import React from 'react'
import Button from './Button'
import notes from './button.md'

export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {},
}

export const ButtonExample = () => <Button>todo</Button>
