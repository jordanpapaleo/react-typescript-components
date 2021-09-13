const esbuild = require('esbuild')
const cssModulesPlugin = require('esbuild-css-modules-plugin')
const fs = require('fs-extra')
// const svgrPlugin = require('esbuild-plugin-svgr')

const isProd = false

const defaultConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  // define: { 'process.env.NODE_ENV': isProd ? 'production' : 'development' },
  plugins: [
    // svgrPlugin({ ref: true, memo: true }),
    cssModulesPlugin({ inject: true }),
  ],
  loader: {
    '.eot': 'dataurl',
    '.png': 'dataurl',
    '.svg': 'dataurl',
    '.ttf': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
  },
  // loader: {
  //   '.eot': 'file',
  //   '.png': 'file',
  //   '.svg': 'file',
  //   '.ttf': 'file',
  //   '.woff': 'file',
  //   '.woff2': 'file',
  // },
}

// Ecma script modules build
esbuild.build({
  ...defaultConfig,
  outfile: './dist/index.mjs',
  format: 'esm',
}).catch((err) => { console.log('ESM build error', err) })

// common js build
esbuild.build({
  ...defaultConfig,
  outfile: './dist/index.js',
  format: 'cjs',
}).catch((err) => { console.log('CJS build error', err) })

// Move assets to the dist directory
const source = 'src/assets'
const destination = 'dist/assets'

fs.copy(source, destination, (err) => {
  if (err) {
    console.log('An error occured while copying the folder.')
    return console.error(err)
  }

  console.log('Copy completed!')
})
