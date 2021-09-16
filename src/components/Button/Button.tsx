import * as React from 'react'
import classnames from 'classnames'
import get from 'lodash/get'

import { DefaultComponentPropI, StyleT } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import { colors } from '../../common/colors'
import Icon from '../Icon'
import styles from './button.module.css'

type ButtonStyleT = 'primary' | 'secondary' | 'link' | 'icon'
type ButtonVariantT = 'success' | 'warning' | 'info' | 'error'
type ButtonSizeT = 'compact'

// TODO: Refactor to use CSS instead of a style object to allow overriding of styles via cascading
export function getButtonStyle(
  style: ButtonStyleT,
  variant?: ButtonVariantT,
  size?: ButtonSizeT,
): StyleT {
  const variantColor = variant ? colors.notifications[variant] : ''
  const styles = []

  const buttonStyles = {
    primary: {
      backgroundColor: variantColor || colors.button.primary.background,
      borderColor: variantColor || colors.button.primary.border,
      color: colors.button.primary.color,
    },
    secondary: {
      backgroundColor: colors.button.secondary.background,
      borderColor: variantColor || colors.button.secondary.border,
      color: variantColor || colors.button.secondary.border,
    },
    link: {
      border: colors.button.link.border,
      background: colors.button.link.background,
      color: variantColor || colors.button.link.color,
      margin: 0,
      minWidth: 0,
      padding: 0,
    },
    icon: {
      backgroundColor: colors.button.icon.background,
      border: 'none',
      color: variantColor || colors.button.icon.color,
      minheight: 16,
      margin: 0,
      minWidth: 16,
      padding: 0,
    },
  }

  styles.push(buttonStyles[style])

  const sizes = {
    small: {
      fontSize: '.8em',
      height: 22,
    },
  }

  if (size === 'compact') {
    styles.push(sizes.small)
  }

  return styles.reduce(
    (current, next) => ({
      ...current,
      ...next,
    }),
    {},
  )
}

export interface PropI extends DefaultComponentPropI {
  buttonStyle?: ButtonStyleT
  disabled?: boolean
  onClick: () => void
  title?: string
  type?: 'submit' | 'button' | 'reset'
  variant?: ButtonVariantT
  size?: ButtonSizeT
}

const Button: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    children,
    className,
    style = {},
    buttonStyle = 'primary',
    disabled,
    onClick,
    size,
    title,
    type = 'button',
    variant = buttonStyle === 'icon' && !props.variant ? 'info' : props.variant,
    ...otherProps
  } = props

  const qaId = toQaId({ parentId: dataQaId, componentId: 'Button' })
  const buttonStyles = {
    ...getButtonStyle(buttonStyle, variant, size),
    ...style,
  }

  return (
    <button
      className={classnames('Button-component', className, styles.button, {
        [styles.buttonDisabled]: disabled,
      })}
      data-qa-id={qaId}
      disabled={disabled}
      onClick={onClick}
      style={buttonStyles}
      title={title}
      type={type}
      {...otherProps}
    >
      {React.Children.map(children, (child: React.ReactNode) => {
        // @ts-ignore
        if (child.type === Icon) {
          const iconStyles = get(child, 'props.style', {})
          let color = ''

          // @ts-ignore
          if (child.props.color) {
            // @ts-ignore
            color = child.props.color
          } else if (variant) {
            color = colors.notifications[variant]
          }

          // @ts-ignore
          return React.cloneElement(child, {
            // @ts-ignore
            ...child.props,
            style: { marginRight: 5, fontSize: 14, ...iconStyles },
            color,
          })
        } else {
          return child
        }
      })}
    </button>
  )
}

export default Button
