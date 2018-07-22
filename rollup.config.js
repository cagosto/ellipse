import babelrc from 'babelrc-rollup';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: production ? 'src/ellipse' : 'src/main.js',
	output: {
		file: production ? 'build/index.js' : 'public/bundle.js',
		format: production ? 'cjs' : 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: production ? false : true
	},
	plugins: [
		babel(babelrc()),
		production && uglify()
	]
};
