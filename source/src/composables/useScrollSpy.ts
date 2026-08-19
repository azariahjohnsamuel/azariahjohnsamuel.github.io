import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollSpy(ids: string[]) {
  const activeId = ref(ids[0])
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          activeId.value = visible[0].target.id
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => observer?.disconnect())

  return { activeId }
}
