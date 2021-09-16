import React from 'react'
import SelectionGroup, { RadioButton, Checkbox } from './SelectionGroup'
import notes from './selectionGroup.md'

export default {
  title: 'Forms/SelectionGroup',
  component: SelectionGroup,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const RadioInput = () => (
  <div>
    <RadioButton label="unchecked" value="unchecked" />
    <RadioButton disabled label="disabled" value="disabled" />
    <RadioButton checked label="checked" value="checked" />
    <RadioButton error label="error" value="error" />
    <RadioButton
      error="you have an error"
      checked
      label="error-checked"
      value="error-checked"
    />
    <RadioButton disabled checked label="disabled and checked" value="both" />
  </div>
)

export const CheckboxInput = () => (
  <div>
    <Checkbox label="unchecked" value="unchecked" />
    <Checkbox disabled label="disabled" value="disabled" />
    <Checkbox checked label="checked" value="checked" />
    <Checkbox error label="error" value="error" />
    <Checkbox
      error="you have an error"
      checked
      label="error-checked"
      value="error-checked"
    />
    <Checkbox disabled checked label="disabled and checked" value="both" />
  </div>
)

export const SingleSelect = () => (
  <SelectionGroup value="opt 2" label="Optional label">
    <RadioButton label="opt 1" value="opt 1" disabled className="test" />
    <RadioButton label="opt 2" value="opt 2" />
    <RadioButton label="opt 3" value="opt 3" />
    <RadioButton label="opt 4" value="opt 4" />
  </SelectionGroup>
)

export const SingleSelectCustom = () => (
  <SelectionGroup
    className="custom-selection"
    label="Optional label"
    value="opt 2"
  >
    <RadioButton label="opt 1" value="opt 1" disabled>
      <div className="custom-option">custom opt 1</div>
    </RadioButton>
    <RadioButton label="opt 2" value="opt 2">
      <div className="custom-option">custom opt 2</div>
    </RadioButton>
    <RadioButton label="opt 3" value="opt 3">
      <div className="custom-option">custom opt 3</div>
    </RadioButton>
    <RadioButton label="opt 4" value="opt 4">
      <div className="custom-option">custom opt 4</div>
    </RadioButton>
  </SelectionGroup>
)

export const MultiSelect = () => (
  <SelectionGroup
    multi
    value={['opt 2', 'opt 1']}
    onChange={(values) => {
      console.log('onChange values', values)
    }}
  >
    <Checkbox label="opt 1" value="opt 1" disabled className="test" />
    <Checkbox label="opt 2" value="opt 2" error />
    <Checkbox label="opt 3" value="opt 3" />
    <Checkbox label="opt 4" value="opt 4" />
  </SelectionGroup>
)
export const MultiSelectCustom = () => (
  <SelectionGroup
    className="custom-selection"
    label="Optional label"
    multi
    onChange={(value) => {
      console.log('onChange values', value)
    }}
    value={['opt 2', 'opt 1']}
  >
    <Checkbox label="opt 1" value="opt 1" disabled className="test">
      <div className="custom-option">custom opt 1</div>
    </Checkbox>
    <Checkbox label="opt 2" value="opt 2">
      <div className="custom-option">custom opt 2</div>
    </Checkbox>
    <Checkbox label="opt 3" value="opt 3">
      <div className="custom-option">custom opt 3</div>
    </Checkbox>
    <Checkbox label="opt 4" value="opt 4">
      <div className="custom-option">custom opt 4</div>
    </Checkbox>
  </SelectionGroup>
)
