import { FontWeightT, FontSizeT } from './typography.types'

export interface TypographyT {
  fontWeight: FontWeightT
  fontSize: FontSizeT
  fontFamilyText: string[]
  fontFamilyDisplay: string[]
  standardLineHeight: number
}

export const typography: TypographyT = {
  fontWeight: {
    bold: 700,
    medium: 500,
    regular: 400,
    semiBold: 600,
  },
  fontSize: {
    fs12: '0.75rem',
    fs14: '0.875rem',
    fs17: '1rem',
    fs22: '1.375rem',
    fs24: '1.5rem',
    fs34: '2.15rem',
  },
  fontFamilyText: ['SF Pro Text', 'sans-serif'],
  fontFamilyDisplay: ['SF Pro Display', 'sans-serif'],
  standardLineHeight: 1.3,
}
