import React from 'react'
import useTheForce from './useTheForce'
import notes from './useTheForce.md'

export default {
  title: 'Hooks/useTheForce',
  component: useTheForce,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {},
}

export const useTheForceExample = () => {
  const hook = useTheForce()
  console.log(hook)
  return <div></div>
}
