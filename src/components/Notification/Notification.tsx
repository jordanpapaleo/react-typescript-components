import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
// import styles from './notification.module.css'
import Icon from 'components/Icon'
import { colors } from 'common/colors'

export interface PropI extends DefaultComponentPropI {
  text?: boolean
  variant?: 'success' | 'warning' | 'info' | 'error' | 'default'
}

const Notification: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    children,
    className,
    style = {},
    text = false,
    variant = 'default',
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Notification' })

  return (
    <div
      className={classnames('Notification-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      {!text && (
        <Icon type="infocircle" color={colors.notifications[variant]} />
      )}

      {children}
    </div>
  )
}

export default Notification
