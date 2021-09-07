import React from 'react'

export const decorators = [
  (Story) => (
    <div className="decorator">
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
