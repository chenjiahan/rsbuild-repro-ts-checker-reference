import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rsbuild/core';

// @ts-expect-error
console.error = (message) => {
  throw new Error(message)
}

export default defineConfig({
  plugins: [pluginTypeCheck(), pluginReact()],
});
