import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
// import styles from './tooltip.module.css'

export interface PropI extends DefaultComponentPropI {
  tip: string
  placement: string
}

const Tooltip: React.FC<PropI> = (props) => {
  const { 'data-qa-id': dataQaId, className, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Tooltip' })

  return (
    <div
      className={classnames('Tooltip-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      Tooltip
    </div>
  )
}

export default Tooltip
