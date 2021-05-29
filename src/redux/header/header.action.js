import { HeaderType } from './header.types';

export const headerSize = locationY => ({
  type: HeaderType.BIG_SIZE_HEADER,
  payload: locationY,
});
export const toggleUserDropDown = () => ({
  type: HeaderType.USER_INFO_DROP_DOWN,
});
