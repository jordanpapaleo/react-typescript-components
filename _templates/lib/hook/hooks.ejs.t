---
inject: true
to: src/hooks/index.ts
append: true
---
export { default as <%= name %> } from './<%= name %>'
