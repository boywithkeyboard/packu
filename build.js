const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  platform: 'node',
  external: ['esbuild', 'fs', 'terser', 'html-minifier-terser', 'css-tree'],
  outfile: 'build/index.js'
})