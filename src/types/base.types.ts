import * as React from 'react'

export type StyleT = {
  [selector: string]: string | number
}

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
  style?: StyleT
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

export interface FormFieldPropsI extends DefaultComponentPropI {
  disabled?: boolean
  error?: boolean
  onBlur?: Function
  onChange?: Function
  onFocus?: Function
  label?: string | React.ReactNode
  name?: string
  value?: string | boolean
}

export interface DictionaryI {
  order: string[]
  [id: string]: any
}

export interface FormValidationI {
  errors: { [formField: string]: string[] }
  valid: boolean
}

export type RenderOverrideT = string | React.ReactNode
export interface RenderOverrideMapI {
  [key: string]: RenderOverrideT | React.ComponentType
}

export interface InputI {
  disabled?: boolean
  error?: boolean
  onBlur?: Function
  onChange?: Function
  onFocus?: Function
  label?: string | React.ReactNode
  name?: string
}
