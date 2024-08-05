import type { StorybookConfig } from "@storybook/react-webpack5";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-webpack5-compiler-swc",
    'storybook-theme-toggle'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true
      }
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  webpackFinal: (config, options) => {
    config.plugins?.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin()
    );

    config.module?.rules?.forEach((rule: any) => {
      if (
        typeof rule !== "string" &&
        rule?.test instanceof RegExp &&
        rule?.test.test("test.css")
      ) {
        rule.exclude = /\.vanilla\.css$/i;
      }
    });

    config.module?.rules?.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve("css-loader"),
          options: {
            url: false,
          },
        },
      ],
    });

    const imageRule = config.module?.rules?.find((rule: any) => {
      if (typeof rule !== 'string' && rule?.test instanceof RegExp) {
        return rule.test.test('.svg')
      }
    })
    if (typeof imageRule !== 'string' && !!imageRule) {
      imageRule.exclude = /\.svg$/
    }
  
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config;
  }
};
export default config;
