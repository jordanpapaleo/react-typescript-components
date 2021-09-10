import styles from './icon.module.css'
import * as React from 'react'
import classnames from 'classnames'
import InlineSVG from 'react-inlinesvg'

import { colors, toQaId } from '../../common'
import { DefaultComponentPropI } from '../../types/base.types'
import { IMAGES, MARCOM_ARR, RMM_ARR, RMM_ARR_T, MARCOM_ARR_T } from './icons'

export type ImagesT = keyof typeof IMAGES

export interface PropI extends DefaultComponentPropI {
  color?: string,
  image?: ImagesT,
  mask?: ImagesT,
  svg?: ImagesT,
  type?: RMM_ARR_T | MARCOM_ARR_T,
}

interface TypeIconPropI extends PropI { type: RMM_ARR_T | MARCOM_ARR_T }
interface MaskIconPropI extends PropI { mask: ImagesT }
interface ImageIconPropI extends PropI { src: string }

const ICON_COLOR = '--icon-color'
const ICON_MASK_URL = '--icon-mask-url'

export const MarcomFontIcon: React.FC<TypeIconPropI> = ({
  'data-qa-id': qaId,
  className,
  color = colors.icons,
  style = {},
  type,
  ...otherProps
}) => {
  return (
    <i
      className={classnames(className, styles.color, `marcom-${type}`)}
      data-qa-id={qaId}
      style={{
        ...style,
        [ICON_COLOR as any]: color,
      }}
      {...otherProps}
    />
  )
}

export const RmmFontIcon: React.FC<TypeIconPropI> = ({
  'data-qa-id': qaId,
  className,
  color = colors.icons,
  style = {},
  type,
  ...otherProps
}) => (
  <i
    className={classnames(className, styles.color, `rmm-${type}`)}
    data-qa-id={qaId}
    style={{
      ...style,
      [ICON_COLOR as any]: color,
    }}
    {...otherProps}
  />
)

export const MaskIcon: React.FC<MaskIconPropI> = ({
  'data-qa-id': qaId,
  className,
  color = colors.icons,
  mask,
  style = {},
  ...otherProps
}) => (
  <div
    className={classnames(className, styles.mask, styles.backgroundColor)}
    data-qa-id={qaId}
    style={{
      ...style,
      [ICON_COLOR as any]: color,
      [ICON_MASK_URL as any]: `url("${mask}")`,
    }}
    {...otherProps}
  />
)

export const SvgIcon: React.FC<ImageIconPropI> = ({
  'data-qa-id': qaId,
  className,
  src,
  style = {},
  color = colors.icons,
  ...otherProps
}) => (
  <InlineSVG
    className={classnames(className, styles.color)}
    data-qa-id={qaId}
    preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
    src={src}
    style={{
      ...style,
      [ICON_COLOR as any]: color,
    }}
    {...otherProps}
  />
)

export const ImageIcon: React.FC<ImageIconPropI> = ({
  'data-qa-id': qaId,
  className,
  src,
  style = {},
  ...otherProps
}) => (
  <img
    alt={src}
    className={classnames(className)}
    data-qa-id={qaId}
    src={src}
    style={style}
    {...otherProps}
  />
)

// @ts-ignore
const Icon: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
    image,
    mask,
    svg,
    type,

    // We just pass these through via otherProps
    // color = '',
    // style = {},
    ...otherProps
  } = props

  const qaId = toQaId({ parentId: dataQaId, componentId: 'Icon' })
  const classname = classnames('Icon-component', className, styles.iconComponent)

  if (type) {
    const isRmmFont = RMM_ARR.includes(type)
    // @ts-ignore
    const isMarcomFont = MARCOM_ARR.includes(type)

    if (isMarcomFont) {
      return <MarcomFontIcon
        className={classname}
        data-qa-id={qaId}
        type={type}
        {...otherProps}
      />
    } else if (isRmmFont) {
      return <RmmFontIcon
        className={classname}
        data-qa-id={qaId}
        type={type}
        {...otherProps}
      />
    }
  } else if (mask) {
    return <MaskIcon
      className={className}
      data-qa-id={qaId}
      // @ts-ignore
      mask={IMAGES[mask]}
      {...otherProps}
    />
  } else if (svg) {
    return <SvgIcon
      className={classname}
      data-qa-id={qaId}
      src={IMAGES[svg]}
      {...otherProps}
    />
  } else if (image) {
    return <ImageIcon
      className={classname}
      data-qa-id={qaId}
      src={IMAGES[image]}
      {...otherProps}
    />
  } else {
    console.log('Icon not found')
    return null
  }
}

export default Icon
