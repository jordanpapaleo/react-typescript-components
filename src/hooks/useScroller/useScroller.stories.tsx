import React from 'react'
import useScroller from './useScroller'

export default {
  title: 'Hooks/useScroller',
}

export const UseScrollerExample = () => {
  const scroller = useScroller({ y: 200, isSmooth: true })

  return (
    <div style={{ height: 3000 }}>
      <button onClick={scroller}>Scroll</button>
    </div>
  )
}
