import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { IStore } from '@Interfaces';

const { Meta } = Card;

function Component(props) {
  const {
    demoStore: {
      image = {},
    },
  } = props;

  return (
    <>
      Hi
    </>
  );
}

const mapStateToProps = (state: IStore) => ({
  demoStore: state.demoStore,
});

export const Dashboard = connect(
	mapStateToProps,
)(Component);
