import React from 'react'
import Icon from './Icon'
import notes from './icon.md'
import { IMAGES, RMM_ARR, MARCOM_ARR } from './icons'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

const sharedGridStyles = { display: 'grid', gridTemplateColumns: '80px auto' }
const sharedIconStyles = { width: 15, height: 15 }
const sharedDlStyles = { display: 'grid', gridGap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }

export const Docs = () => <div />

export const MarcomFonts = () => (
  <div>
    <Icon type="apple" />
    <Icon type="apple" color="red" />
    <Icon type="apple" active />
    <Icon type="apple" color="hotpink" style={{ backgroundColor: 'black' }} />
    <Icon type="apple" style={{ border: '1px solid black', padding: 3 }} />

    <hr />

    <dl style={sharedDlStyles}>
      {MARCOM_ARR.map((type) => (
        <div key={type} style={sharedGridStyles}>
          <dd>
            <Icon type={type} />
          </dd>
          <dt>{type}</dt>
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
    <Icon type="avatar" style={{ border: '1px solid black', borderRadius: '50%', padding: 5, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} />

    <hr />

    <h4>Keys</h4>

    <dl style={sharedDlStyles}>
      {RMM_ARR.map((type) => (
        <div key={type} style={sharedGridStyles}>
          <dd>
            <Icon type={type} />
          </dd>
          <dt>{type}</dt>
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
            <Icon mask={key} style={sharedIconStyles} />
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

    <Icon svg="demodevices" color="hotpink" />

    <hr />

    <dl style={sharedDlStyles}>
      {Object.keys(IMAGES).map((key) => (
        <div key={key} style={sharedGridStyles}>
          <dd>
            <Icon svg={key} style={sharedIconStyles} />
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
