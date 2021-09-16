import React from 'react'
import Tooltip from './Tooltip'
import notes from './tooltip.md'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const TooltipExample = () => <Tooltip>todo</Tooltip>
