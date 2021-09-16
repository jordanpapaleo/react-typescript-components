import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './progress.module.css'

export interface PropI extends DefaultComponentPropI {}

const Progress: React.FC<PropI> = (props) => {
  const { 'data-qa-id': dataQaId, className, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Progress' })

  return (
    <div
      className={classnames('Progress-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      Progress
    </div>
  )
}

export default Progress
