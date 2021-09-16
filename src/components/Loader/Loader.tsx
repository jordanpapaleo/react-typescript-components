import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './loader.module.css'

export interface PropI extends DefaultComponentPropI {}

const Loader: React.FC<PropI> = (props) => {
  const { 'data-qa-id': dataQaId, className, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Loader' })

  return (
    <div
      className={classnames('Loader-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      Loader
    </div>
  )
}

export default Loader
