import * as React from 'react'
import classnames from 'classnames'
import get from 'lodash/get'

import { DefaultComponentPropI, InputI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
// import styles from './selectionGroup.module.css'
// import { colors } from 'common/colors'
import Notification from 'components/Notification'

export interface PropI extends DefaultComponentPropI, InputI {
  checked: boolean
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    checked = false,
    className,
    children,
    disabled,
    error,
    name,
    onChange,
    style = {},
    value,
    label,
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'RadioButton' })
  const isCustom = !!children

  return (
    <label
      className={classnames('RadioButton-component', className, {
        checked,
        disabled,
        error,
        hidden: isCustom,
      })}
      data-qa-id={qaId}
      style={style}
    >
      <div>
        <input
          aria-checked={checked}
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={onChange}
          type="radio"
          value={value}
        />

        <span className="form-choice-indicator"></span>

        {isCustom
          ? (
              React.Children.map(children, (child) => {
                // @ts-ignore
                return React.cloneElement(child, {
                  checked,
                  disabled,
                  name,
                  className: classnames(get(child, 'props.className', ''), {
                    checked,
                    disabled,
                  }),
                  // @ts-ignore
                  ...child.props,
                })
              })
            )
          : (
          <span className="form-choice-label">{label}</span>
            )}
      </div>

      {error && typeof error === 'string' && (
        <Notification variant="error" style={{ marginTop: 0 }}>
          {error}
        </Notification>
      )}
    </label>
  )
}

export default RadioButton
