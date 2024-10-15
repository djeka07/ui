import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-theme-toggle',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: false,
    docsMode: false,
  },
};
export default config;
