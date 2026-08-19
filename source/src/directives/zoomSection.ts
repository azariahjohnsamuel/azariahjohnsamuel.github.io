import type { Directive } from 'vue'

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))
const smoothstep = (t: number) => t * t * (3 - 2 * t)

const elements = new Set<HTMLElement>()
let raf = 0
let listening = false

function update() {
  raf = 0
  const vh = window.innerHeight
  const mid = vh / 2
  for (const el of elements) {
    const rect = el.getBoundingClientRect()
    // Distance from the viewport's vertical center to the section: zero
    // (fully in focus) whenever that center falls anywhere inside the
    // section, regardless of how tall it is, so multi-row grids don't get
    // stuck dim just because their own midpoint sits off-screen.
    let dist: number
    if (rect.top <= mid && rect.bottom >= mid) {
      dist = 0
    } else if (rect.bottom < mid) {
      dist = mid - rect.bottom
    } else {
      dist = rect.top - mid
    }
    const progress = smoothstep(clamp(1 - dist / (vh * 0.6), 0, 1))
    el.style.setProperty('--zoom', (0.93 + 0.07 * progress).toFixed(4))
    el.style.setProperty('--fade', (0.35 + 0.65 * progress).toFixed(4))
    el.style.setProperty('--blur', ((1 - progress) * 3).toFixed(2))
  }
}

function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(update)
}

function ensureListening() {
  if (listening) return
  listening = true
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
}

export const vZoomSection: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('zoom-section')
    elements.add(el)
    ensureListening()
    update()
  },
  unmounted(el) {
    elements.delete(el)
  },
}
