import { actionConsts } from '../actionConsts';

import { IAction, IWrapperPage, IStore } from '@Interfaces';

const INITIAL_STATE: IWrapperPage.IStateProps = {
	version: 1,
	name: 'One',
	mobile: false,
	boxed: false,
	darkSidebar: false,
	optionDrawer: false,
	mobileDrawer: false,
	fullscreen: false,
};

type IMapPayload = IWrapperPage.Actions.IMapPayload;

/* eslint-disable complexity */
export const wrapperReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
    case actionConsts.wrapper.setOptionDrawer:
      return {
				...state,
				optionDrawer: typeof(action.payload) === 'boolean' ? action.payload : !state.optionDrawer
			};

    case actionConsts.wrapper.setMobile:
      return {
				...state,
				mobile: typeof(action.payload) === 'boolean' ? action.payload : !state.mobile
			};

    case actionConsts.wrapper.setMobileDrawer:
      return {
				...state,
				mobileDrawer: typeof(action.payload) === 'boolean' ? action.payload : !state.mobileDrawer
			};

		case actionConsts.wrapper.setup:
      const { wrapper }: IStore = JSON.parse(localStorage.getItem('settings') || '{}');
      return { ...state, ...wrapper, ...action.payload };

		default:
			return state;
  }
};
/* eslint-enable complexity */
