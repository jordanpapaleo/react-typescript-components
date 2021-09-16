import React from 'react'
import usePageScroll from './usePageScroll'
import notes from './usePageScroll.md'

export default {
  title: 'Hooks/usePageScroll',
  component: usePageScroll,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {},
}

export const usePageScrollExample = () => {
  const hook = usePageScroll()
  console.log(hook)
  return <div></div>
}
