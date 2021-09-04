---
inject: true
to: src/components/index.ts
append: true
---
export { default as <%= name %> } from './<%= name %>'
