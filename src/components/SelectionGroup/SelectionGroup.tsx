import * as React from 'react'
import classnames from 'classnames'
import get from 'lodash/get'

import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import styles from './selectionGroup.module.css'
import RadioButton from './RadioButton'
import Checkbox from './Checkbox'
import Notification from 'components/Notification'
import FormLabel from 'components/FormLabel'

export interface PropI extends DefaultComponentPropI {
  error?: boolean | string
  label?: string | Node
  labelAux?: string | Node
  inline?: boolean
  name: string
  onChange: Function
  value: string | number | Array<string | number>
}

const SelectionGroup: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    children,
    className,
    error,
    inline,
    label,
    labelAux,
    name,
    onChange,
    style = {},
    value: valueProp,
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'SelectionGroup' })
  const [value, setValue] = React.useState(valueProp)

  React.useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  function handleChange(se) {
    const nextValue = get(se, 'target.value')
    let derivedValue

    if (value instanceof Array) {
      if (value.includes(nextValue)) {
        derivedValue = value.filter((v) => v !== nextValue)
      } else {
        derivedValue = value.concat(nextValue)
      }
    } else {
      derivedValue = nextValue
    }

    setValue(derivedValue)

    if (onChange) {
      onChange(derivedValue)
    }
  }

  return (
    <div
      className={classnames('SelectionGroup-component', className)}
      data-qa-id={qaId}
      style={style}
    >
      {(label || labelAux) && (
        <FormLabel
          label={label}
          labelAux={labelAux}
          variant={error && 'error'}
        />
      )}

      <div
        className={classnames('SelectionGroup-component-selections', {
          inline,
        })}
      >
        {React.Children.map(children, (child) => {
          if (child.type === RadioButton || child.type === Checkbox) {
            const p = {
              name,
              onChange: handleChange,
              ...child.props,
            }

            if (value instanceof Array) {
              p.checked = value.includes(child.props.value)
            } else {
              p.checked = value === child.props.value
            }

            return React.cloneElement(child, p)
          }
        })}
      </div>

      {error && typeof error === 'string' && (
        <Notification variant="error" data-qa-id={qaId}>
          {error}
        </Notification>
      )}
    </div>
  )
}

export default SelectionGroup
