import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './textArea.module.css'

export interface PropI extends DefaultComponentPropI {}

const TextArea: React.FC<PropI> = (props) => {
  const { 'data-qa-id': dataQaId, className, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'TextArea' })

  return (
    <div
      className={classnames('TextArea-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      TextArea
    </div>
  )
}

export default TextArea
