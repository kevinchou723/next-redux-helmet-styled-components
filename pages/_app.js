// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import theme from '../theme';
import { initStore } from '../store';

class Application extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: (Component.getInitialProps
        ? await Component.getInitialProps(ctx) : {}),
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(Application);
