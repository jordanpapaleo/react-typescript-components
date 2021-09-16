import * as React from 'react'
import classnames from 'classnames'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './textInput.module.css'
import FormLabel from 'components/FormLabel'
import Notification from 'components/Notification'

export interface PropI extends DefaultComponentPropI {
  disabled?: boolean
  error?: boolean | string
  inputStyle?: string
  label?: string | React.ReactNode
  labelAux?: string | React.ReactNode
  onBlur?: Function
  onChange?: Function
  onFocus?: Function
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  value: string
}

const TextInput: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
    disabled = false,
    error,
    inputStyle = '',
    label,
    labelAux,
    onBlur,
    onChange,
    onFocus,
    prefix,
    style = {},
    suffix,
    value = '',
    ...otherProps
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'TextInput' })
  const [focused, setFocused] = React.useState(false)

  function handleFocus(se) {
    setFocused(true)

    if (onFocus) {
      onFocus(se)
    }
  }

  function handleBlur(se) {
    setFocused(false)

    if (onBlur) {
      onBlur(se)
    }
  }

  function handleChange(se) {
    if (onChange) {
      onChange(se)
    }
  }

  return (
    <label
      className={classnames('TextInput-component', className, {
        disabled,
        error,
        focused,
        [inputStyle]: inputStyle,
      })}
      style={style}
      data-qa-id={qaId}
    >
      {(label || label === '' || labelAux || labelAux === '') && (
        <FormLabel
          label={label}
          labelAux={labelAux}
          variant={error ? 'error' : 'default'}
        />
      )}

      <span className="input-wrapper">
        {prefix && <span className="input-prefix">{prefix}</span>}

        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={disabled}
          value={value || ''}
          {...otherProps}
        />

        {suffix && <span className="input-suffix">{suffix}</span>}
      </span>

      {error && typeof error === 'string' && (
        <Notification variant="error">{error}</Notification>
      )}
    </label>
  )
}

export default TextInput
