import * as React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { Dispatch } from 'redux';
import { Dashboard } from 'todo-list';

import { IHomePage, IStore } from '@Interfaces';

class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
  constructor(props: IHomePage.IProps) {
    super(props);
  }

  componentDidMount() {
  }

  public render(): JSX.Element {
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/react-vis.css" />
        </Head>
        <Dashboard />
      </>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(HomePage);
