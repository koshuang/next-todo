import App, { Container, NextAppContext } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import { Page } from 'app';
import { GlobalStyles } from 'app';

import { store, afterComponentDidMount } from 'app';

import { IApp } from '@Interfaces';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
Router.events.on(
  'routeChangeComplete',
  () => (document.querySelector('.workspace > .ant-layout').scrollTop = 0)
);

class MyApp extends App<IApp.IProps> {
  static async getInitialProps(props: NextAppContext) {
    let pageProps = {};

    if (props.Component.getInitialProps) {
      pageProps = await props.Component.getInitialProps(props.ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    afterComponentDidMount();
  }

  render(): JSX.Element {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <GlobalStyles />
        <Head>
          <meta
            name="viewport"
            content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="/static/images/triangle.png" />
          <title>One - React Next.js Ant Design Dashboard</title>
          <link
            href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700"
            rel="stylesheet"
          />
          {pageProps.ieBrowser && (
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js" />
          )}
        </Head>
        <Provider store={store}>
          <Page {...this.props as any}>
            <Component {...pageProps} />
          </Page>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(store)(MyApp);
