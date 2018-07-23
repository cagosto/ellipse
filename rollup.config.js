import babelrc from 'babelrc-rollup';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: production ? 'src/ellipse' : 'src/main.js',
	output: {
		file: production ? 'build/index.js' : 'public/bundle.js',
		format: production ? 'esm' : 'iife',
		sourcemap: production ? false : true
	},
	plugins: [
		babel(babelrc()),
		production && minify({
			comments: false,
			sourceMap: false
		})
	]
};
