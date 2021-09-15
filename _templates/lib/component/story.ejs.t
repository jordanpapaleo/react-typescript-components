---
to: src/components/<%= name %>/<%= h.changeCase.camel(name) %>.stories.js
---
import React from 'react'
import <%= name %> from './<%= name %>'
import notes from './<%= h.changeCase.camel(name) %>.md'

export default {
  title: 'Components/<%= name %>',
  component: <%= name %>,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {}
}

export const <%= name %>Example = () => (
  <<%= name %>>
    todo
  </<%= name %>>
)
