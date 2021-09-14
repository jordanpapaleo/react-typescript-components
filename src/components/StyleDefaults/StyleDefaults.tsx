import * as React from 'react'
import classnames from 'classnames'

import { colors, typography } from '../../common'
import { DefaultComponentPropI } from '../../types/base.types'
import { toQaId } from '../../common/formats'
import MarcomFonts from '../MarcomFonts'
import RmmFonts from '../RmmFonts'

export interface PropI extends DefaultComponentPropI {}

const StyleDefaults: React.FC<PropI> = (props) => {
  const {
    'data-qa-id': dataQaId,
    className,
  } = props
  const qaId = toQaId({ parentId: dataQaId, componentId: 'StyleDefaults' })

  return (
    <div
      className={classnames('StyleDefaults-component', className)}
      data-qa-id={qaId}
      style={{ height: 0, position: 'absolute' }}
    >
      <CssVariables />
      <MarcomFonts />
      <RmmFonts />
      <BaseStyles />
    </div>
  )
}

export const CssVariables: React.FC = () => <style className="CssVariables-component">{cssVariables}</style>
export const BaseStyles: React.FC = () => <style className="BaseStyles-component">{baseStyles}</style>

const cssVariables = `
:root {
  --animDuration: 0.3s;
  --animEase: ease-out;

  /* COLORS */
  --white: ${colors.white}; /* #FFFFFF */
  --black: ${colors.black}; /* #000000 */
  --transparent: ${colors.transparent};

  --backgroundColor: ${colors.background}; /* #FBFBFD */
  --backgroundDarkColor: ${colors.backgroundDark}; /* #F7F7F7 */
  --backgroundLightColor: ${colors.backgroundLight}; /* #FFFFFF */
  --borderColor: ${colors.border}; /* #D6D6D6 */
  --borderLightColor: ${colors.borderLight}; /* #EEEEEE */
  --borderDarkColor: ${colors.borderDark}; /* #1d1d1f */
  --shadowColor: ${colors.shadow}; /* 'rgba(0,0,0,0.1)' */
  --iconColor: ${colors.icons}; /* #888888 */

  /* Text Colors */
  --brandColor: ${colors.brandPrimary}; /* #157DFB */
  --brand30Color: ${colors.brandPrimary30};
  --copyColor: ${colors.defaultText}; /* #333333 */
  --copyLightColor: ${colors.text.copyLight}; /* #888888 */
  --copyWhiteColor: ${colors.text.copyWhite}; /* #FFFFFF */
  --copyDarkColor: ${colors.text.copyDark}; /* #1d1d1f */
  --headingColor: ${colors.text.headingDefault}; /* #333333 */
  --headingDarkColor: ${colors.text.headingDark}; /* #1d1d1f */
  --headingLightColor: ${colors.text.headingLight}; /* #888888 */
  --headingLightestColor: ${colors.text.headingLightest}; /* #BBBBBB */
  --linkActiveColor: ${colors.text.linkActive}; /* #333333 */
  --linkColor: ${colors.text.link}; /* #157DFB */

  /* Notification Colors */
  --errorColor: ${colors.notifications.error}; /* #E30000 */
  --infoColor: ${colors.notifications.info}; /* #157DFB */
  --successColor: ${colors.notifications.success}; /* #289B00 */
  --warningColor: ${colors.notifications.warning}; /* #F56300 */
  --defaultColor: ${colors.notifications.default}; /* #888888 */
  --backgroundError: ${colors.notifications.errorBackground}; /* #E30000 */

  /* Status Colors */
  --approvedColor: ${colors.status.approved}; /* #289B00 */
  --draftColor: ${colors.status.draft}; /* #157DFB */
  --pendingColor: ${colors.status.pending}; /* #F56300 */
  --rejectedColor: ${colors.status.rejected}; /* #E30000 */
  --archivedColor: ${colors.status.archived}; /* D6D6D6 */

  /* Disabled Colors */
  --disabledBackgroundColor: ${colors.formInput.disabledBackground}; /* '#F7F7F7' */
  --disabledTextColor: ${colors.formInput.disabledColor}; /* #888888 */

  /* TYPOGRAPHY */
  --lineHeight: ${typography.standardLineHeight};
  --fw-bold: ${typography.fontWeight.bold};
  --fw-medium: ${typography.fontWeight.medium};
  --fw-regular: ${typography.fontWeight.regular};
  --fw-semibold: ${typography.fontWeight.semiBold};

  /* Other */
  --borderRadius: 4px;

  --fs-12: ${typography.fontSize.fs12};
  --fs-14: ${typography.fontSize.fs14};
  --fs-17: ${typography.fontSize.fs17};
  --fs-22: ${typography.fontSize.fs22};
  --fs-24: ${typography.fontSize.fs24};
  --fs-34: ${typography.fontSize.fs34};
  --fs-icon: ${typography.fontSize.fs14};
  --fs-iconLarge: ${typography.fontSize.fs34};

  --ff-text: "SF Pro Text", sans-serif;
  --ff-display: "SF Pro Display", sans-serif;
    /* Spacing */
  --form-horizontal-spacing: 15px;
  --form-vertical-spacing: 18px;
  --content-horizontal-spacing: 20px;
  --content-vertical-spacing: 24px;
}
`

const baseStyles = `
* {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
}

body, html {
  color: var(--copyColor);
  font-family: var(--ff-text);
  font-size: 16px;
  letter-spacing: -0.015em;
  line-height: var(--lineHeight);
  text-rendering: auto;
}

hr {
  background-color: rgba(255,255,255,0);
  height: 0px;
  margin-bottom: 40px;
  margin-top: 40px;
  opacity: 0.3;
  border-bottom: 1px solid var(--borderLightColor);
}

/* Set typography */
a,
dl,
input,
label,
li,
ol,
p,
select,
table,
textarea,
ul {
  font-size: var(--fs-14);
  font-weight: var(--fw-regular);
}

a {
  color: var(--linkColor);
  cursor: pointer;
}

h1, h2, h3, .h1, .h2, .h3 {
  font-family: var(--ff-display);
}

h1, h2, h3, h4, h5, p, .h1, .h2, .h3, .h4, .h5 {
  margin: 0 0 0.45em 0;
}

h1, .h1 {
  color: var(--headingDarkColor);
  font-size: var(--fs-34);
  font-weight: var(--fw-bold);
  letter-spacing: 0.01em;
  line-height: var(--lineHeight);
}

h2, .h2 {
  color: var(--headingColor);
  font-size: var(--fs-24);
  font-weight: var(--fw-semiBold);
  letter-spacing: 0.005px;
  line-height: var(--lineHeight);
}

h3, .h3 {
  color: var(--headingDarkColor);
  font-size: var(--fs-22);
  font-weight: var(--fontWeightMedium);
  letter-spacing: 0.01em;
  line-height: var(--lineHeight);
}

h4, .h4 {
  color: var(--headingColor);
  font-size: var(--fs-17);
  font-weight: var(--fw-semiBold);
  letter-spacing: -0.025em;
  line-height: var(--lineHeight);
}

h5, .h5 {
  color: var(--headingLightColor);
  font-size: var(--fs-14);
  font-weight: var(--fw-semiBold);
  letter-spacing: 0;
  line-height: var(--lineHeight);
  text-transform: uppercase;
}

th, th > * {
  font-weight: var(--fw-bold);
}

.form-controls {
  margin-top: var(--content-vertical-spacing);
}

.fieldset {
  margin-bottom: var(--form-vertical-spacing);
  display: grid;
  grid-gap: var(--form-vertical-spacing);
}
`

export default StyleDefaults
