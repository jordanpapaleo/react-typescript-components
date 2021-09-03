export function toMinAndSec(durationInSeconds: number = 0): string {
  let minutes = Math.floor(durationInSeconds / 60).toString()
  let seconds = Math.round(durationInSeconds % 60).toString()

  if (minutes.length === 1) minutes = '0' + minutes
  if (seconds.length === 1) seconds = '0' + seconds

  return minutes + ':' + seconds
}

// Used to format data-qa-id
export function toQaId({ parentId, componentId, useId }: {
  componentId?: string,
  parentId?: string,
  useId?: string | number,
} = {}): string {
  return [parentId, componentId, useId].filter(Boolean).join('_')
}

export function toGuid(): string {
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

// creates a this, this, this, and that from an array of strings
export function toCommaAnd(list: string[] = []): string {
  const messages = []

  let firstTerm = list.slice(0, list.length - 1).join(', ')

  if (firstTerm.length > 1) {
    firstTerm += ','
  }

  messages.push(firstTerm)
  messages.push(list[list.length - 1])

  return messages
    .filter(Boolean)
    .join(' and ')
}
