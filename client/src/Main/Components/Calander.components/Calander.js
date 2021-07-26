import React, { useState } from 'react';
import 'react-dates/initialize';
import './react_dates_overrides.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
// import '../Calendar.container/Calendar.styles.scss';
import moment from 'moment';
// import moment from '../../../../node_modules/moment/moment';
import { connect } from 'react-redux';
import { getCalenderDate } from '../../../redux/booking/booking.action';

function Calender({ props, getUserDate, setStart, setEnd }) {
  const [startDate, setStartDate] = useState(moment);
  const [endDate, setEndDate] = useState(moment);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate, stayDate }) => {
    stayDate = (endDate - startDate) / (1000 * 60 * 60 * 24);
    // console.log((endDate - startDate) / (1000 * 60 * 60 * 24));
    setStartDate(startDate);
    setEndDate(endDate);

    let start = new Date(startDate).toLocaleDateString();
    let end = new Date(endDate).toLocaleDateString();
    getUserDate(start, end, stayDate);
  };

  return (
    <div>
      <DateRangePicker
        // onSubmit ={handleSubmit}
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="start_date_id" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId="end_date_id" // PropTypes.string.isRequired,
        onDatesChange={handleDatesChange} // PropTypes.func.isRequired,
        customArrowIcon={true}
        startDatePlaceholderText={setStart}
        endDatePlaceholderTex={setEnd}
        noBorder={true}
        block={true}
        // navPrev="U+3008"
        // navNext=">"
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
      />
      {/* <button onClick={}>btn</button> */}
    </div>
  );
}

// const mapStateToProps = ({ booking: { startDay, endDay } }) => ({
//   startDay,
//   endDay,
// });

const mapDispatchToProps = dispatch => ({
  getUserDate: (start, end, stayDate) =>
    dispatch(getCalenderDate(start, end, stayDate)),
});
export default connect(null, mapDispatchToProps)(Calender);
