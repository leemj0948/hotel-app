import React from 'react';
import { connect } from 'react-redux';
import { tooglePeopleModalHidden } from '../../../redux/booking/booking.action';

const PeopleModalTrigger = ({ totalGuest, togglePeopleModalHidden }) => {
  return (
    <div onClick={togglePeopleModalHidden}>
      <div>인원</div>
      <div placeholder="게스트추가">
        {totalGuest ? `게스트  ${totalGuest} 명` : '게스트 추가'}
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  togglePeopleModalHidden: () => dispatch(tooglePeopleModalHidden()),
});

const mapStateToProps = ({ booking: { guest, adult, infant } }) => ({
  totalGuest: guest + adult + infant,
});
export default connect(mapStateToProps, mapDispatchToProps)(PeopleModalTrigger);
