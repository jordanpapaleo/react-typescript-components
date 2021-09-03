import * as React from 'react'

export interface DefaultComponentPropI {
  /**
   *  Used to create a unique testable path
   */
  'data-qa-id'?: string
  children?: React.ReactNode
  /**
   * Adds a class name to the root component
   */
  className?: string
  /**
   * Applies styles to the style tag on the root component
   */
  style?: {
    [selector: string]: string | number
  }
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
  style: {
    [selector: string]: string | number
  }
}

export interface RenderOverrideMapI {
  [key: string]: any
}
