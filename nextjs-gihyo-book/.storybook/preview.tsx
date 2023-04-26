import React from "react";
import type { Preview } from "@storybook/react";
import { ImageProps } from "next/image";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../src/themes";
import * as NextImage from "next/image";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000;
  }
`;

// Themeの適用
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {Story()}
    </ThemeProvider>
  ),
];

// next/imageの差し替え
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props: ImageProps) =>
    typeof props.src === "string" ? (
      <OriginalNextImage {...props} unoptimized blurDataURL="{props.src" />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});

export default preview;
