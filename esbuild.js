const esbuild = require('esbuild')
const cssModulesPlugin = require('esbuild-css-modules-plugin')
const svgrPlugin = require('esbuild-plugin-svgr')

const defaultConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  plugins: [
    svgrPlugin({ ref: true, memo: true }),
    cssModulesPlugin({ inject: true }),
  ],
}

// Ecma script modules build
esbuild.build({
  ...defaultConfig,
  outfile: './dist/index.mjs',
  format: 'esm',
})

// common js build
esbuild.build({
  ...defaultConfig,
  outfile: './dist/index.js',
  format: 'cjs',
})
