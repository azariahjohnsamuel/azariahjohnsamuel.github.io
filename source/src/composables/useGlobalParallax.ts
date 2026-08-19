let bound = false

/** Tracks the cursor as a -0.5..0.5 offset from the viewport center and
 * publishes it as --px/--py on the root element, so any component anywhere
 * in the tree can react to it in plain CSS via var(--px)/var(--py). */
export function useGlobalParallax() {
  if (bound || typeof window === 'undefined') return
  if (!window.matchMedia?.('(hover: hover)').matches) return

  bound = true
  const root = document.documentElement
  let raf = 0

  window.addEventListener(
    'mousemove',
    (e: MouseEvent) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const px = e.clientX / window.innerWidth - 0.5
        const py = e.clientY / window.innerHeight - 0.5
        root.style.setProperty('--px', px.toFixed(3))
        root.style.setProperty('--py', py.toFixed(3))
      })
    },
    { passive: true },
  )
}
