---
to: src/components/<%= name %>/<%= h.changeCase.camel(name) %>.test.ts
---

describe('<%= name %>', () => {
  it('should be true', () => {
    expect(true).toBe(true)
  })
})
