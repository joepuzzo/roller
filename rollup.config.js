export default {
  input: [`src/index.js`, 'src/a/a.js', 'src/b/b.js', 'src/c/c.js'],
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
