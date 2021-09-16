import { useEffect, useState } from 'react'

export default function usePageScroll() {
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
    verticleDirection: '',
    horizontalDirection: '',
  })

  function listener() {
    setScroll((prev) => {
      const x = window.scrollX
      const y = window.scrollY
      const verticleDirection = prev.y > y ? 'up' : 'down'
      const horizontalDirection = prev.x > x ? 'right' : 'left'

      return { x, y, verticleDirection, horizontalDirection }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  return scroll
}
