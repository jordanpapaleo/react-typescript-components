import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './listWrap.module.css'

export interface PropI extends DefaultComponentPropI {}

const ListWrap: React.FC<PropI> = (props) => {
  const { 'data-qa-id': dataQaId, className, style = {} } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'ListWrap' })

  return (
    <div
      className={classnames('ListWrap-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      ListWrap
    </div>
  )
}

export default ListWrap
