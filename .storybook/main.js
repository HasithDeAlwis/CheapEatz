import path from 'node:path';
/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  "addons": [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
  ],
  "framework": {
    "name": "@storybook/sveltekit",
    "options": {}
  },
  core: { builder: "@storybook/builder-vite" },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "$lib",
            replacement: path.resolve(__dirname, "../src/lib"),
          }
        ],
      },
    };
  },
};
export default config;