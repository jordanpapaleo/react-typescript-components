import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './sortable.module.css'

export interface PropI extends DefaultComponentPropI {}

const Sortable: React.FC<PropI> = (props) => {
  const { 'data-qa-id': dataQaId, className, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Sortable' })

  return (
    <div
      className={classnames('Sortable-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      Sortable
    </div>
  )
}

export default Sortable
