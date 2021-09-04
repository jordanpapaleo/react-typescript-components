import React from 'react'

export const decorators = [
  (Story) => (
    <div className="decorator" style={{ padding: '3em', margin: '3em', border: '1px solid grey', borderRadius: 4 }}>
      <Story />
    </div>
  ),
]

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Intro', 'UI', 'Components', 'Hooks', 'Common', 'Testing'],
      locales: '',
    },
  }
}
