import * as React from 'react'
import classnames from 'classnames'
import get from 'lodash/get'

import { DefaultComponentPropI, InputI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
// import styles from './selectionGroup.module.css'
import Notification from 'components/Notification'

export interface PropI extends DefaultComponentPropI, InputI {
  checked?: boolean
  value?: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    checked = false,
    className,
    children,
    disabled,
    error,
    label,
    name,
    onChange,
    style = {},
    value,
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'Checkbox' })
  const isCustom = !!children

  return (
    <label
      className={classnames('Checkbox-component', className, {
        checked,
        disabled,
        error,
        hidden: isCustom,
      })}
      style={style}
      data-qa-id={qaId}
    >
      <div>
        <input
          aria-checked={checked}
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={onChange}
          type="checkbox"
          value={value}
        />
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
        <Notification variant="error" style={{ marginTop: 0, marginLeft: 0 }}>
          {error}
        </Notification>
      )}
    </label>
  )
}

export default Checkbox
