import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
// import styles from './error.module.css'

export interface PropI extends DefaultComponentPropI {}

const Error: React.FC<PropI> = (props) => {
  const { 'data-qa-id': dataQaId, className, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Error' })

  return (
    <div
      className={classnames('Error-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      Error
    </div>
  )
}

export default Error
