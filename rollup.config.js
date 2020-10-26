const fs = require('fs');
const path = require('path');

const modules = fs.readdirSync(path.join(__dirname, './src'))
  .filter( file => file !== 'index.js')
  .map( dir => {
    const module = dir; // file.replace('.js', '');
	  return {
      input: `src/${module}/${module}.js`,
      output: [
      	// {
        //   file: `dist/${module}.js`,
        //   format: 'cjs'
        // },
        {
          file: `dist/${module}.js`,
          format: 'es'
        }
      ]
    };
  }
);

export default [
  ...modules,
];
