import './button.module.css'
import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from 'types/base.types'
import { toQaId } from 'common/formats'

export interface PropI extends DefaultComponentPropI {}

const Button: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
    style = {},
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Button' })

  return (
    <div
      className={classnames('Button-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      Button
    </div>
  )
}

export default Button
