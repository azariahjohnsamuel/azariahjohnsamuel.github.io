const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export function formatMonthYear(isoDate: string): string {
  const [year, month] = isoDate.split('-').map(Number)
  return `${MONTHS[month - 1]} ${year}`
}

export function formatRange(start: string, end: string): string {
  const startLabel = formatMonthYear(start)
  const endLabel = end ? formatMonthYear(end) : 'Present'
  return `${startLabel} – ${endLabel}`
}

export function durationLabel(start: string, end: string): string {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())
  months = Math.max(months, 1)
  const years = Math.floor(months / 12)
  const remMonths = months % 12
  const parts: string[] = []
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (remMonths) parts.push(`${remMonths} mo${remMonths > 1 ? 's' : ''}`)
  return parts.join(' ')
}
