import * as React from 'react'
import classnames from 'classnames'

// import { colors } from 'common/colors'
// import styles from './dropdown.module.css'
import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import FormLabel from 'components/FormLabel'
import Notification from 'components/Notification'

export interface PropI extends DefaultComponentPropI {
  disabled?: boolean
  error?: boolean | string
  id?: string
  items: Array<{ label: string; value: any }>
  label?: string | Node
  labelAux?: string | Node
  name?: string
  onChange: Function
  required?: boolean
  value: string | number
}

const Dropdown: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
    disabled,
    error,
    id,
    items = [],
    label,
    labelAux,
    name,
    onChange,
    required = false,
    style,
    value,
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Dropdown' })

  function handleChange(se: React.ChangeEvent) {
    if (onChange) {
      // @ts-ignore
      onChange(se.target.value, se)
    }
  }

  const hasLabel = label || label === '' || labelAux || labelAux === ''

  return (
    <label
      className={classnames('Dropdown-component', className, {
        disabled,
        error,
      })}
      style={style}
    >
      {hasLabel && (
        <FormLabel
          label={label}
          labelAux={labelAux}
          variant={error ? 'error' : undefined}
        />
      )}

      <select
        data-qa-id={qaId}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        required={required}
        value={value}
      >
        {items.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <span>{'\uF000'}</span>

      {error && typeof error === 'string' && (
        <Notification variant="error">{error}</Notification>
      )}
    </label>
  )
}

export default Dropdown
