import { BOOKING_TYPE_DATA } from './booking.data';
import { BookingActionType } from './booking.types';
import { minusAndRemoveGuests } from './booking.utils';
// import { toalGuests } from './booking.utils';
const INITIAL_STATE = {
  collection: BOOKING_TYPE_DATA,
  hidden: true,
  guest: 0,
  adult: 0,
  infant: 0,
};
const bookingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookingActionType.TOGGLE_PEOPLE_MODAL_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case BookingActionType.PLUS_ADULT_GUEST:
      return {
        ...state,
        adult: state.adult + 1,
      };

    case BookingActionType.PLUS_CHILD_GUEST:
      return {
        ...state,
        guest: state.guest + 1,
      };
    case BookingActionType.PLUS_INFANT_GUEST:
      return {
        ...state,
        infant: state.infant + 1,
      };
    case BookingActionType.MINUS_ADULT_GUEST:
      return {
        ...state,
        adult: minusAndRemoveGuests(state.adult, action.payload),
        // adult: state.adult == 1 ? 0 : state.adult - 1,
      };
    case BookingActionType.MINUS_CHILD_GUEST:
      return {
        ...state,
        guest: minusAndRemoveGuests(state.guest, action.payload),
        // guest: state.guest == 1 ? 0 : state.guest - 1,
      };
    case BookingActionType.MINUS_INFANT_GUEST:
      return {
        ...state,
        infant: minusAndRemoveGuests(state.infant, action.payload),
        // infant: state.infant == 1 ? 0 : state.infant - 1,
      };
    default:
      return state;
  }
};

export default bookingReducer;
