const fs = require('fs');
const path = require('path');

const modules = fs.readdirSync(path.join(__dirname, './src'))
  .filter( file => file !== 'index.js')
  .map( file => {
    const module = file.replace('.js', '');
	  return {
      input: `src/${module}/${module}.js`,
      output: [
				{
          file: `dist/${module}.js`,
          format: 'cjs'
        },
        {
          file: `dist/${module}.es.js`,
          format: 'es'
        }
      ]
    };
  }
);

export default [
  {
    input: 'src/index.js',
    output: [
			{
      	file: 'dist/index.js',
      	format: 'cjs'
    	},
			{
      	file: 'dist/index.es.js',
      	format: 'es'
    	},
		]
  },
  ...modules,
];
