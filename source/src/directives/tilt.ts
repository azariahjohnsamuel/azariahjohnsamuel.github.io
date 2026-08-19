import type { Directive } from 'vue'

interface TiltElement extends HTMLElement {
  __tiltCleanup?: () => void
}

const canHover = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(hover: hover)').matches

export const vTilt: Directive<TiltElement> = {
  mounted(el) {
    if (!canHover()) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`
    }
    const reset = () => {
      el.style.transform = ''
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', reset)
    el.__tiltCleanup = () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', reset)
    }
  },
  unmounted(el) {
    el.__tiltCleanup?.()
  },
}
