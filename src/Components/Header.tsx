import { Avatar, Layout, Menu } from 'antd';
import {
  BarChart,
  ChevronsDown,
  Settings,
  Triangle
} from 'react-feather';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IWrapperPage, IStore } from '@Interfaces';
import { WrapperActions } from '@Actions';

import DashHeader from './styles/Header';

const { SubMenu } = Menu;
const { Header } = Layout;

const MainHeader = (props: IWrapperPage.IProps) => {
  const {
    setOptionDrawer,
    setMobileDrawer,
  } = props;
  const state = props;
  return (
    <DashHeader>
      <Header>
        {state.mobile && (
          <a
            onClick={() => setMobileDrawer()}
            className="trigger"
          >
            <BarChart size={20} strokeWidth={1} />
          </a>
        )}
        <Link href="/">
          <a className="brand">
            <Triangle size={24} strokeWidth={1} />
            <strong className="mx-1 text-black">{state.name}</strong>
          </a>
        </Link>

        <Menu mode="horizontal" className="menu-divider">
          {!state.mobile && (
            <Menu.Item>
              <Link href="/apps/calendar">
                <a>Calendar</a>
              </Link>
            </Menu.Item>
          )}

          {state.mobile && (
            <SubMenu title={<ChevronsDown size={20} strokeWidth={1} />}>
              <Menu.Item>Calendar</Menu.Item>
            </SubMenu>
          )}
        </Menu>

        <span className="mr-auto" />

        <Menu mode="horizontal">
          <Menu.Item onClick={() => setOptionDrawer()}>
            <Settings size={20} strokeWidth={1} />
          </Menu.Item>

          <SubMenu title={<Avatar src="/static/images/avatar.jpg" />}>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Divider />
            <Menu.Item>
              <Link href="https://one-readme.fusepx.com">
                <a>Help?</a>
              </Link>
            </Menu.Item>
            <Menu.Item>Signout</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    </DashHeader>
  );
};

const mapStateToProps = (state: IStore) => state.wrapper;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setOptionDrawer: bindActionCreators(WrapperActions.setOptionDrawer, dispatch),
  setMobileDrawer: bindActionCreators(WrapperActions.setMobileDrawer, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);