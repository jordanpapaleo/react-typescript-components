import React from 'react'
import Button from './Button'
import Icon from '../Icon'
import notes from './button.md'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: { description: { component: notes } },
  },
  argTypes: {},
}

export const ButtonExamples = () => (
  <div>
    <Button buttonStyle="primary">Primary</Button>
    <Button buttonStyle="secondary">Secondary</Button>
    <Button buttonStyle="link">Link</Button>
    <Button buttonStyle="icon">
      <Icon type="infocircle" /> Icon
    </Button>
  </div>
)

export const ButtonSizes = () => (
  <div>
    <Button>Default</Button>
    <Button size="compact">Compact</Button>
    <Button size="compact" buttonStyle="link">
      Compact
    </Button>
    <Button buttonStyle="icon" size="compact">
      <Icon type="infocircle" /> Compact Icon
    </Button>
  </div>
)

export const ButtonVariants = () => (
  <div>
    <div className="buttons">
      <h3>Primary</h3>
      <Button>Default</Button>
      <Button buttonStyle="primary" variant="info">
        Info
      </Button>
      <Button buttonStyle="primary" variant="success">
        Success
      </Button>
      <Button buttonStyle="primary" variant="warning">
        Warning
      </Button>
      <Button buttonStyle="primary" variant="error">
        Error
      </Button>
    </div>

    <div className="buttons">
      <h3>Secondary</h3>
      <Button buttonStyle="secondary">Default</Button>
      <Button buttonStyle="secondary" variant="info">
        Info
      </Button>
      <Button buttonStyle="secondary" variant="success">
        Success
      </Button>
      <Button buttonStyle="secondary" variant="warning">
        Warning
      </Button>
      <Button buttonStyle="secondary" variant="error">
        Error
      </Button>
    </div>

    <div className="buttons">
      <h3>Link</h3>
      <Button buttonStyle="link">Default</Button>
      <Button buttonStyle="link" variant="info">
        Info
      </Button>
      <Button buttonStyle="link" variant="success">
        Success
      </Button>
      <Button buttonStyle="link" variant="warning">
        Warning
      </Button>
      <Button buttonStyle="link" variant="error">
        Error
      </Button>
    </div>

    <div className="buttons">
      <h3>Icon</h3>
      <Button buttonStyle="icon">
        <Icon image="trashcan" /> Default
      </Button>
      <Button buttonStyle="icon" variant="info">
        <Icon type="infocircle" /> Info
      </Button>
      <Button buttonStyle="icon" variant="success">
        <Icon type="infocircle" /> Success
      </Button>
      <Button buttonStyle="icon" variant="warning">
        <Icon type="infocircle" /> Warning
      </Button>
      <Button buttonStyle="icon" variant="error">
        <Icon type="infocircle" /> Error
      </Button>
    </div>
  </div>
)

export const MoreExamples = () => (
  <div>
    <Button buttonStyle="icon" variant="error">
      <Icon type="infocircle" color="green" /> Error
    </Button>

    <Button buttonStyle="primary" variant="error">
      <Icon type="infocircle" color="white" /> Error
    </Button>
  </div>
)
