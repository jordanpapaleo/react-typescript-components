import * as React from 'react'

export interface StyleI {
  [selector: string]: string | number
}

export interface DefaultComponentPropI {
  'data-qa-id'?: string
  children?: React.ReactNode
  className?: string
  style?: StyleI
}

export interface InputPropT extends DefaultComponentPropI {
  disabled?: boolean
  error?: boolean
  onBlur?: Function
  onChange?: Function
  onFocus?: Function
  label?: string | React.ReactNode
  name?: string
}

export interface DictionaryI {
  order: string[]
  [id: string]: any
}

export interface FormValidationI {
  errors: { [formField: string]: string[] }
  valid: boolean
}

export interface TableHeaderI {
  label: string | React.ReactNode
  sortable?: boolean
  value: string
  style: StyleI
}

export interface RenderOverrideMapI {
  [key: string]: any
}
