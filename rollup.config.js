export default {
  input: [`src/index.js`, 'src/a/a.js', 'src/b/b.js', 'src/c/c.js', 'src/ab/ab.js',],
  output: [
    {
      dir: `dist/cjs`,
      format: 'cjs'
    },
    {
      dir: `dist/esm`,
      format: 'esm'
    }
  ]
}
