import * as React from 'react'

const RmmFonts: React.FC = () => <style className="RmmFonts-component">{styles}</style>

export default RmmFonts

const styles = `
@font-face {
  font-family: 'rmm-icons';
  font-weight: normal;
  font-style: normal;
  src: url('/fonts/rmm-icons/rmm-icons.eot');
  src: url('/fonts/rmm-icons/rmm-icons.eot') format('embedded-opentype'),
    url('/fonts/rmm-icons/rmm-icons.woff2') format('woff2'),
    url('/fonts/rmm-icons/rmm-icons.woff') format('woff'),
    url('/fonts/rmm-icons/rmm-icons.ttf') format('truetype'),
    url('/fonts/rmm-icons/rmm-icons.svg') format('svg');
}

[class^="rmm-"]:before,
[class*=" rmm-"]:before {
  display: inline-block;
  font-family: "rmm-icons";
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1em;
  text-decoration: inherit;
  text-transform: none;
  width: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.rmm-add:before { content: '\\e801'; }
.rmm-alert:before { content: '\\e802'; }
.rmm-avatar:before { content: '\\e803'; }
.rmm-back:before { content: '\\e804'; }
.rmm-backup:before { content: '\\e805'; }
.rmm-calendar:before { content: '\\e806'; }
.rmm-clock:before { content: '\\e807'; }
.rmm-cog:before { content: '\\e808'; }
.rmm-demodevices:before { content: '\\e809'; }
.rmm-dragdrop:before { content: '\\e80a'; }
.rmm-forumdisplay:before { content: '\\e80b'; }
.rmm-imageplaceholder:before { content: '\\e80c'; }
.rmm-info:before { content: '\\e80d'; }
.rmm-landscape:before { content: '\\e80e'; }
.rmm-layers:before { content: '\\e80f'; }
.rmm-menu:before { content: '\\f0ca'; }
.rmm-more:before { content: '\\e811'; }
.rmm-moreoptions:before { content: '\\e812'; }
.rmm-portrait:before { content: '\\e813'; }
.rmm-profile:before { content: '\\e814'; }
.rmm-repeat:before { content: '\\e815'; }
.rmm-daily:before { content: '\\e815'; }
.rmm-star:before { content: '\\e816'; }
.rmm-trashcan:before { content: '\\e817'; }
.rmm-videowall:before { content: '\\e818'; }
`