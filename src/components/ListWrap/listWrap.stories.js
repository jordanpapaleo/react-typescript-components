import React from 'react'
import ListWrap from './ListWrap'
import notes from './listWrap.md'

export default {
  title: 'Components/ListWrap',
  component: ListWrap,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const ListWrapExample = () => <ListWrap>todo</ListWrap>
