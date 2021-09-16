import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './editableText.module.css'

export interface PropI extends DefaultComponentPropI {}

const EditableText: React.FC<PropI> = (props) => {
  const { 'data-qa-id': dataQaId, className, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'EditableText' })

  return (
    <div
      className={classnames('EditableText-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      EditableText
    </div>
  )
}

export default EditableText
