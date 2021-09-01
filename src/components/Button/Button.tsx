import * as React from 'react'
import { DefaultComponentPropI } from 'types/base.types'

interface PropT extends DefaultComponentPropI {
  onClick?: () => void
}

const Button: React.FC<PropT> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
)

export default Button
