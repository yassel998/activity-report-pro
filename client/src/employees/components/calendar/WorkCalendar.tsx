// WorkCalendar.tsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './WorkCalendar.scss';

const WorkCalendar: React.FC = () => {
  const [workingDays, setWorkingDays] = useState<number>(20);
  const [selectedDays, setSelectedDays] = useState<Date[]>([]);

  const handleDayClick = (day: Date) => {
    setSelectedDays((prevSelectedDays) => {
      const dayValue = day.getDate();

      if (prevSelectedDays.some((d) => d.getDate() === dayValue)) {
        // If the day is already selected, remove it
        return prevSelectedDays.filter((d) => d.getDate() !== dayValue);
      } else {
        // If the day is not selected, add it
        return [...prevSelectedDays, day];
      }
    });
  };

  const renderCalendar = () => {
    return (
      <div>
        <Calendar
          onChange={(value) => {}}
          value={new Date()} // Set a fixed date to prevent month/year navigation
          onClickDay={(day) => handleDayClick(day)}
          tileClassName={({ date }) => {
            const dayValue = date.getDate();

            // Check if the day is a weekend (Saturday or Sunday)
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;

            // Check if the day is disabled
            const isDisabled = date.getMonth() !== new Date().getMonth();

            // Check if the day is selected
            const isSelected = selectedDays.some(
              (selectedDay) => selectedDay.getDate() === dayValue
            );

            // Apply styles based on the conditions
            return `calendar-day${isWeekend ? ' weekend' : ''}${
              isDisabled ? ' disabled' : ''
            }${isSelected ? ' selected' : ''}`;
          }}
          tileContent={({ date }) => {
            // Custom tile content to render the selected state
            const dayValue = date.getDate();
            const isSelected = selectedDays.some(
              (selectedDay) => selectedDay.getDate() === dayValue
            );

            return isSelected ? (
              <div className={`selected-indicator ${isSelected ? 'full' : ''}`}></div>
            ) : null;
          }}
          prev2Label={null} // Hide the previous 2 months label
        />
      </div>
    );
  };

  return (
    <div>
      <h1>Work Calendar</h1>
      <label htmlFor="workingDays">Number of Working Days:</label>
      <input
        type="number"
        id="workingDays"
        min="1"
        max="31"
        value={workingDays}
        onChange={(e) => setWorkingDays(parseInt(e.target.value, 10))}
      />
      {renderCalendar()}
      <div>
        <h2>Selected Days</h2>
        <ul>
          {selectedDays.map((day) => (
            <li key={day.getDate()}>{`Day ${day.getDate()}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkCalendar;
