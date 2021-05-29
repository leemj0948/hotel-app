import React from 'react';
import Calender from '../Calander.components/Calander';
import './Calendar.styles.scss';

const CalendarContainer = () => {
  return (
    <div className="CalenderBox">
      <Calender />
      <Calender />
    </div>
  );
};

export default CalendarContainer;
