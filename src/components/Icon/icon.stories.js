import React from 'react'
import Icon from './Icon'
import notes from './icon.md'
import { MARCOM, RMM, IMAGES } from './icons'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {},
}

const sharedGridStyles = { display: 'grid', gridTemplateColumns: '80px auto' }
const sharedIconStyles = { width: 15, height: 15 }
const sharedDlStyles = { display: 'grid', gridGap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }

export const Docs = () => <div />

export const MarcomFonts = () => (
  <div>
    <Icon type="clock" />
    <Icon type="clock" color="red" />
    <Icon type="clock" color="blue" />
    <Icon type="clock" color="hotpink" style={{ backgroundColor: 'black' }} />
    <Icon type="clock" style={{ border: '1px solid black', padding: 3 }} />

    <hr />

    <dl style={sharedDlStyles}>
      {Object.keys(MARCOM).map((key) => (
        <div key={key} style={sharedGridStyles}>
          <dd>
            <Icon type={key} />
          </dd>
          <dt>{key}</dt>
        </div>
      ))}
    </dl>

  </div>
)

export const RmmFonts = () => (
  <div>
    <Icon type="avatar" />
    <Icon type="avatar" color="red" />
    <Icon type="avatar" color="blue" />
    <Icon type="avatar" color="hotpink" style={{ backgroundColor: 'black' }} />
    <Icon type="avatar" style={{ border: '1px solid black', padding: 3 }} />

    <hr />

    <h4>Keys</h4>

    <dl style={sharedDlStyles}>
      {Object.keys(RMM).map((key) => (
        <div key={key} style={sharedGridStyles}>
          <dd>
            <Icon type={key} color="blue" />
          </dd>
          <dt>{key}</dt>
        </div>
      ))}
    </dl>
  </div>
)

export const ImageMasks = () => (
  <div>
    <p>Uses the type property and renders the image using the </p>
    <p>You have to explicitly use the style tag to set the size of these</p>
    <Icon mask="daily" color="red" style={sharedIconStyles} />
    <Icon mask="daily" color="orange" style={sharedIconStyles} />

    <hr />

    <dl style={sharedDlStyles}>
      {Object.keys(IMAGES).map((key) => (
        <div key={key} style={sharedGridStyles}>
          <dd>
            <Icon mask={key} style={sharedIconStyles} color="red" />
          </dd>
          <dt>{key}</dt>
        </div>
      ))}
    </dl>
  </div>
)

export const SvgMarkup = () => (
  <div>
    <p>This renders the svg DOM markup into the page from the file.  This is not a cached image.</p>

    <Icon svg="demodevices" />

    <hr />

    <dl style={sharedDlStyles}>
      {Object.keys(IMAGES).map((key) => (
        <div key={key} style={sharedGridStyles}>
          <dd>
            <Icon svg={key} style={sharedIconStyles} color="hotpink" />
          </dd>
          <dt>{key}</dt>
        </div>
      ))}
    </dl>
  </div>
)

export const ImageSource = () => (
  <div>
    <p>This provides you an image using the named svg as the source. You are not able to change to color of an image src.</p>

    <Icon image="demodevices" style={{ width: 50 }} />
    <Icon image="demodevices" />
    <Icon image="demodevices" />
    <Icon image="demodevices" style={{ border: '1px solid black', padding: 3 }} />

    <hr />

    <dl style={sharedDlStyles}>
      {Object.keys(IMAGES).map((key) => (
        <div key={key} style={sharedGridStyles}>
          <dd>
            <Icon image={key} style={sharedIconStyles} />
          </dd>
          <dt>{key}</dt>
        </div>
      ))}
    </dl>
  </div>
)
