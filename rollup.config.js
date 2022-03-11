import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: [
    {
      file: 'app.js',
      format: 'esm',
    },
  ],
  plugins: [nodeResolve(), terser()],
  treeshake: true,
};
