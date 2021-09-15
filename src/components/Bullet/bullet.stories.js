import React from 'react'
import Bullet from './Bullet'
import notes from './bullet.md'

export default {
  title: 'Components/Bullet',
  component: Bullet,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const BulletExample = () => (
  <div>
    <Bullet />
    <Bullet color="red" />
    <Bullet color="#00FF00" />
    <Bullet color="hotpink" />
    <Bullet color="rgb(255,150,150)" />
  </div>
)
