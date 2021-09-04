import { toMinAndSec, toQaId, toCommaAnd } from './formats'

describe('toMinAndSec', () => {
  it('should format seconds to `mm:ss`', () => {
    expect(toMinAndSec(60)).toBe('01:00')
    expect(toMinAndSec(0)).toBe('00:00')
    expect(toMinAndSec()).toBe('00:00')
  })
})

describe('toQaId', () => {
  it('should create the correct test string based on values provided', () => {
    expect(
      toQaId({
        parentId: 'parent',
        componentId: 'component',
        useId: 'use',
      }),
    ).toBe('parent_component_use')

    expect(
      toQaId({
        parentId: 'parent',
        componentId: 'component',
      }),
    ).toBe('parent_component')

    expect(
      toQaId({
        parentId: 'parent',
        useId: 'use',
      }),
    ).toBe('parent_use')

    expect(
      toQaId({
        componentId: 'component',
        useId: 'use',
      }),
    ).toBe('component_use')

    expect(
      toQaId({
        parentId: 'parent',
      }),
    ).toBe('parent')

    expect(
      toQaId({
        componentId: 'component',
      }),
    ).toBe('component')

    expect(
      toQaId({
        useId: 'use',
      }),
    ).toBe('use')

    expect(toQaId()).toBe('')
  })
})

describe('toCommaAnd', () => {
  it('should format correctly for a list of strings', () => {
    expect(toCommaAnd()).toBe('')
    expect(toCommaAnd([])).toBe('')
    expect(toCommaAnd(['1'])).toBe('1')
    expect(toCommaAnd(['1', '2'])).toBe('1 and 2')
    expect(toCommaAnd(['1', '2', '3'])).toBe('1, 2, and 3')
    expect(toCommaAnd(['1', '2', '3', '4'])).toBe('1, 2, 3, and 4')
  })
})
