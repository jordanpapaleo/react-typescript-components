type useScrollerT = {
  x: number
  y: number
  isSmooth?: boolean
}

export default function useScroller({
  isSmooth = false,
  x,
  y,
}: useScrollerT): (() => void) | undefined {
  if (!window) return

  return function scroller() {
    window.scrollTo({
      left: x,
      top: y,
      behavior: isSmooth ? 'smooth' : 'auto',
    })
  }
}
