import React from "react";
import App from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import configureStore from "../store/store";
import "../styles/globals.css";

export interface ITheme {
  color: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  color: "#818291",
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${(props) => props.theme.color}; 
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>GraphQL Job Board</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default withRedux(configureStore)(MyApp);
