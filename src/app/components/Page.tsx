import * as React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { withRouter, WithRouterProps } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/GlobalStyles';
import { Container, Inner } from './styles/Page';

import { IWrapperPage, IStore } from '@Interfaces';


const Component = (props: IWrapperPage.IProps & WithRouterProps) => {
  const { router, children } = props;
  const state = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        className={`${state.weakColor ? 'weakColor' : ''} ${
          state.boxed ? 'boxed shadow-sm' : ''
        }`}
      >
        <Inner>{children}</Inner>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: IStore) => state.wrapper;

export const Page = withRouter(connect(mapStateToProps)(Component));
