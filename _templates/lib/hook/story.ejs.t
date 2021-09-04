---
to: src/hooks/<%= name %>/<%= h.changeCase.camel(name) %>.stories.js
---
import React from 'react'
import <%= name %> from './<%= name %>'
import notes from './<%= name %>.md'

export default {
  title: 'Hooks/<%= name %>',
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
  const hook = <%= name %>()
  console.log(hook)
  return (<div></div>)
}
