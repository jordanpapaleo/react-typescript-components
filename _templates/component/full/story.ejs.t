---
to: src/<%= path || actionfolder %>/<%= name %>/<%= h.changeCase.camel(name) %>.stories.js
---
import React from 'react'
import <%= name %> from './<%= name %>'
import notes from './<%= h.changeCase.camel(name) %>.md'

export default {
  title: '<%= path %>/<%= name %>',
  component: <%= name %>,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {}
}

export const <%= name %>Example = () => (
  <<%= name %>>
    todo
  </<%= name %>>
)
