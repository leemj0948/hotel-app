import { HeaderType } from './header.types';
import { sizeOfBar } from './header.utils';

const INITAL_STATE = {
  bigHeader: true,
  UserInfoHidden: true,
};

const headerReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case HeaderType.BIG_SIZE_HEADER:
      return {
        ...state,
        bigHeader: sizeOfBar(state.bigHeader, action.payload),
      };
    case HeaderType.USER_INFO_DROP_DOWN:
      return {
        ...state,
        UserInfoHidden: !state.UserInfoHidden,
      };
    default:
      return state;
  }
};
export default headerReducer;
