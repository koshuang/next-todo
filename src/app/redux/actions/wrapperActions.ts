import { actionConsts } from '../actionConsts';

import { IWrapperPage } from '@Interfaces';

export const wrapperActions: IWrapperPage.IDispatchProps = {
	setOptionDrawer: (payload?: boolean) => ({
		type: actionConsts.wrapper.setOptionDrawer,
		payload,
	}),

	setMobile: (payload?: boolean) => ({
		type: actionConsts.wrapper.setMobile,
		payload,
	}),

	setMobileDrawer: (payload?: boolean) => ({
		type: actionConsts.wrapper.setMobileDrawer,
		payload,
	}),

	setup: (payload?: any) => ({
		type: actionConsts.wrapper.setup,
		payload,
	}),
};
