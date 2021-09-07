---
to: src/components/<%= name %>/<%= name %>.tsx
---
import './<%= h.changeCase.camel(name) %>.module.css'
import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'

export interface PropI extends DefaultComponentPropI {}

const <%= name %>: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
    style = {},
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: '<%= name %>' })

  return (
    <div
      className={classnames('<%= name %>-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      <%= name %>
    </div>
  )
}

export default <%= name %>
