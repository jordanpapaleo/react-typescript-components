const esbuild = require('esbuild')

const defaultConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
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
