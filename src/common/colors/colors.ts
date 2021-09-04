import { transparentize } from 'polished'
import {
  NavColorI,
  ColorHashI,
  ButtonColorI,
  FormColorI,
  SelectColorI,
  TextColorI,
  StatusColorI,
  NotificationColorI,
} from './colors.types'

const dodgerBlue = '#157DFB'
const dodgerBlue90 = transparentize(0.1, dodgerBlue)
const dodgerBlue25 = transparentize(0.75, dodgerBlue)
const hawkesBlue = '#CDE1FA'
const red = '#E30000'
const red05 = transparentize(0.92, red)
const forestGreen = '#289B00' // #03a10e
const safetyOrange = '#F56300'
const transparent = 'rgba(255,255,255, 0)'

const black = 'rgba(0,0,0,1)'
const blackRussian = '#1d1d1f'
const nightRider = '#333333'
const nightRider50 = transparentize(0.5, nightRider)
const grey = '#888888'
const noble = '#999999'
const silver = '#BBBBBB'
const lightGrey = '#D6D6D6'
const whiteSmoke = '#F7F7F7'
const whisper = '#EEEEEE'
const snow = '#FBFBFD'
const white = 'rgba(255,255,255,1)'

// Uses
const background = snow
const backgroundDark = whiteSmoke
const backgroundLight = white
const border = lightGrey
const borderDark = blackRussian
const borderLight = whisper
const brandPrimary = dodgerBlue
const brandPrimary30 = dodgerBlue25
const defaultText = nightRider
const gray = noble
const icons = grey
const lightText = grey
const shadow = 'rgba(0,0,0,0.1)'

const notifications: NotificationColorI = {
  success: forestGreen,
  warning: safetyOrange,
  info: dodgerBlue,
  error: red,
  errorBackground: red05,
  default: lightText,
}

const status: StatusColorI = {
  approved: notifications.success,
  archived: lightGrey,
  default: lightText,
  draft: notifications.info,
  pending: notifications.warning,
  rejected: notifications.error,
}

const text: TextColorI = {
  headingDefault: defaultText,
  headingDark: blackRussian,
  headingLight: lightText,
  headingLightest: silver,
  copyDark: blackRussian,
  copy: defaultText,
  copyLight: lightText,
  copyWhite: white,
  link: dodgerBlue,
  linkActive: defaultText,
}

const select: {
  default: SelectColorI
  dark: SelectColorI
} = {
  default: {
    background: backgroundLight,
    border: border,
    cursorColor: grey,
    disabledBackground: backgroundDark,
    hover: backgroundDark,
    iconColor: icons,
    neutral10: background,
    optionBorder: white,
    primary: border,
    primary25: backgroundDark,
    text: defaultText,
  },
  dark: {
    background: transparentize(0.35, nightRider),
    border: transparentize(0.25, nightRider),
    cursorColor: background,
    hover: transparentize(0.75, nightRider),
    iconColor: background,
    neutral10: background,
    optionBorder: lightText,
    primary: border,
    primary25: backgroundDark,
    text: background,
  },
}

const formInput: FormColorI = {
  checkboxCheckedBackground: brandPrimary,
  checkboxCheckedBorder: brandPrimary30,
  checkboxColor: white,
  checkboxDisabledCheckedBackground: brandPrimary30,
  checkboxDisabledCheckedBorder: brandPrimary30,
  disabledBackground: backgroundDark,
  disabledBorder: border,
  disabledColor: grey,
  errorBackground: notifications.errorBackground,
  errorBorder: notifications.error,
  errorColor: notifications.error,
  focusBackground: brandPrimary30,
  focusBorder: brandPrimary,
  placeholderColor: silver,
}

type ButtonsT = {
  primary: ButtonColorI
  secondary: ButtonColorI
  link: ButtonColorI
  icon: ButtonColorI
}

const button: ButtonsT = {
  primary: {
    background: brandPrimary,
    border: brandPrimary,
    color: white,
  },
  secondary: {
    background: white,
    border: silver,
  },
  link: {
    background: transparent,
    border: transparent,
    color: brandPrimary,
  },
  icon: {
    background: transparent,
    color: brandPrimary,
  },
}

const nav: NavColorI = {
  backgroundHover: hawkesBlue,
  color: dodgerBlue,
}

// Raw color access
export const colorHash: ColorHashI = Object.freeze({
  black,
  blackRussian,
  dodgerBlue,
  dodgerBlue25,
  dodgerBlue90,
  red,
  red05,
  forestGreen,
  grey,
  hawkesBlue,
  lightGrey,
  nightRider,
  nightRider50,
  noble,
  safetyOrange,
  snow,
  transparent,
  whisper,
  whiteSmoke,
  white,
})

// Color use
export const colors: {
  brandPrimary: string
  brandPrimary30: string
  background: string
  backgroundDark: string
  backgroundLight: string
  border: string
  borderLight: string
  borderDark: string
  defaultText: string
  icons: string
  gray: string
  white: string
  black: string
  transparent: string
  shadow: string
  button: ButtonsT
  formInput: FormColorI
  select: {
    default: SelectColorI
    dark: SelectColorI
  }
  nav: NavColorI
  notifications: NotificationColorI
  status: StatusColorI
  text: TextColorI
} = Object.freeze({
  brandPrimary,
  brandPrimary30,
  background,
  backgroundDark,
  backgroundLight,
  border,
  borderLight,
  borderDark,
  defaultText,
  icons,
  gray,
  white,
  black,
  transparent,
  shadow,
  // nested use
  button,
  formInput,
  select,
  nav,
  notifications,
  status,
  text,
})
