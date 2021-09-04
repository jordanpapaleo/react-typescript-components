import React from 'react'
import { colors, colorHash } from './index'
import { ColorHashI } from './colors.types'

export default {
  title: 'UI/Colors',
}

const ColorBlock = ({ color }: { color: string }) => (
  <div
    style={{
      background: color,
      border: '1px solid black',
      height: 25,
      width: 25,
    }}
  />
)

const ColorList = ({ hash, label }: { hash: ColorHashI, label?: string }) => (
  <div>
    {label && <h3>{label}</h3>}
    <dl>
      {Object.entries(hash).map(([name, hex]) => (
        <div key={name} style={{ display: 'flex', marginBottom: 5 }}>
          {hex instanceof Object
            ? (
            <ColorList hash={hex} label={label ? `${label}-${name}` : name} />
              )
            : (
            <>
              <dd style={{ marginRight: 5 }}>
                <ColorBlock color={hex} />
              </dd>
              <dt>{name}</dt>:<dd style={{ marginLeft: 5 }}>{hex}</dd>
            </>
              )}
        </div>
      ))}
    </dl>
  </div>
)

export const ColorHash = () => {
  return <ColorList hash={colorHash} />
}

export const ColorUse = () => {
  // @ts-ignore
  return <ColorList hash={colors} />
}
