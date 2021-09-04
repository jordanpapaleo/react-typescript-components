---
to: src/common/<%= name %>/<%= name %>.stories.js
---
import React from 'react'
import * as <%= name %> from './<%= name %>'
import notes from './<%= name %>.md'

export default {
  title: 'Common/<%= name %>',
  component: <%= name %>,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {},
}

export const <%= name %>Example = () => {
  console.log(<%= name %>)
  return (<div></div>)
}
