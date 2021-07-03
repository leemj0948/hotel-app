// import 'react-calendar/dist/Calendar.css';
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';

// function Calender() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//     </div>
//   );
// }
// export default Calender;

import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import '../Calendar.container/Calendar.styles.scss';

export default function ReactdatesDatepicker() {
  const [date, setDate] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  function onDateChange(date) {
    setDate(date);
  }

  function onFocusChange({ focused }) {
    setIsFocused(focused);
  }

  return (
    <SingleDatePicker
      className="singleDate"
      id="date_input"
      date={date}
      focused={isFocused}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      keepOpenOnDateSelect={true}
    />
  );
}
