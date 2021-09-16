import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './bullet.module.css'

export interface PropI extends DefaultComponentPropI {
  color: string
}

const Bullet: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
    color = 'black',
    style = {},
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Bullet' })

  return (
    <span
      className={classnames('Bullet-component', className, styles.bullet)}
      data-qa-id={qaId}
      style={{ backgroundColor: color, ...style }}
    />
  )
}

export default Bullet
