import * as React from 'react'
import classnames from 'classnames'

import styles from './button.module.css'
import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'

export interface PropI extends DefaultComponentPropI {}

const Button: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    children,
    className,
    style = {},
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Button' })

  return (
    <button
      className={classnames('Button-component', className, styles.button)}
      data-qa-id={qaId}
      style={style}
    >
      {children}
      <style>{styles1}</style>
    </button>
  )
}

const styles1 = `
  .Button-component {
    background: yellow;
  }
`

export default Button
