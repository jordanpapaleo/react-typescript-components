import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './formLabel.module.css'

export interface PropI extends DefaultComponentPropI {
  label?: string | React.ReactNode
  labelAux?: string | React.ReactNode
  variant?: 'success' | 'warning' | 'info' | 'error' | 'default'
}

const FormLabel: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
    label,
    labelAux,
    style = {},
    variant,
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'FormLabel' })

  return (
    <div
      className={classnames('FormLabel-component', className, styles.formLabel)}
      data-qa-id={qaId}
      style={style}
    >
      <span style={{ flexGrow: 1, display: 'inlineBlock', minHeight: 14 }}>
        {typeof label === 'string' && (label || label === '') && label}
         {/* @ts-ignore */}
        {React.isValidElement(label) &&
          React.cloneElement(label, { 'data-qa-id': qaId, variant })}
      </span>

      <span>
        {typeof labelAux === 'string' && (labelAux || labelAux === '') && labelAux}

        {/* @ts-ignore */}
        {React.isValidElement(labelAux) &&
          React.cloneElement(labelAux, { 'data-qa-id': qaId, variant })}
      </span>
    </div>
  )
}

export default FormLabel
