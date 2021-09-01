import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
}

export const ButtonExample = () => (
  <Button
    onClick={() => {
      console.log('Clicked')
    }}
  >
    Click
  </Button>
)
