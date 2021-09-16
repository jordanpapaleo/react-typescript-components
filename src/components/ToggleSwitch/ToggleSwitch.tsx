import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './toggleSwitch.module.css'

export interface PropI extends DefaultComponentPropI {}

const ToggleSwitch: React.FC<PropI> = (props) => {
  const { 'data-qa-id': dataQaId, className, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'ToggleSwitch' })

  return (
    <div
      className={classnames('ToggleSwitch-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      ToggleSwitch
    </div>
  )
}

export default ToggleSwitch
