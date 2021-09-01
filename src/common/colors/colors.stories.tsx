import React from 'react'
import colors, { colorHash } from './colors'
import { ColorHashI } from './colors.types'
// import css from 'styled-jsx/css'

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

const ColorList = ({ hash, label }: { hash: ColorHashI; label?: string }) => (
  <div>
    {label && <h3>{label}</h3>}
    <dl>
      {Object.entries(hash).map(([name, hex]) => (
        <div key={name}>
          {hex instanceof Object ? (
            <ColorList hash={hex} label={label ? `${label}-${name}` : name} />
          ) : (
            <>
              <dd style={{ marginRight: 5 }}>
                <ColorBlock color={hex} />
              </dd>
              <dt>{name}</dt>:<dd>{hex}</dd>
            </>
          )}
        </div>
      ))}
    </dl>
    {/* <style jsx>{styles}</style> */}
  </div>
)

// const styles = css`
//   dl > div {
//     align-items: center;
//     display: flex;
//     margin-bottom: 5px;
//   }
// `

export const ColorHash = () => {
  return <ColorList hash={colorHash} />
}

export const ColorUse = () => {
  // @ts-ignore
  return <ColorList hash={colors} />
}
