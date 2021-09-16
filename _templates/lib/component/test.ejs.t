---
to: src/components/<%= name %>/<%= h.changeCase.camel(name) %>.test.ts
---
// @ts-nocheck

describe('<%= name %>', () => {
  it('should be true', () => {
    expect(true).toBe(true)
  })
})
