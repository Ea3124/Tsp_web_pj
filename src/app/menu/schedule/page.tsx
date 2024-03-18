'use client'
import React, { useState } from 'react';

const Schedule = () => {
  // Array of months for the schedule
  const months = ['March', 'April', 'May', 'June'];
  // State to keep track of the current month index
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  // Function to go to the previous month
  const prevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  // Function to go to the next month
  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex < months.length - 1 ? prevIndex + 1 : months.length - 1));
  };

  return (
    <div className="bg-blue-200 shadow-lg rounded-lg p-4 max-w-sm mx-auto">
      <div className="flex items-center justify-between py-2 px-3 bg-blue-400 rounded-t-lg">
        {/* Disable the button if the current month is the first one */}
        <button className="font-semibold text-white" onClick={prevMonth} disabled={currentMonthIndex === 0}>
          {'<'}
        </button>
        <span className="text-white text-lg font-semibold">{months[currentMonthIndex]}</span>
        {/* Disable the button if the current month is the last one */}
        <button className="font-semibold text-white" onClick={nextMonth} disabled={currentMonthIndex === months.length - 1}>
          {'>'}
        </button>
      </div>
      <div className="flex flex-col items-center bg-white rounded-b-lg h-96">
        {/* Calendar content goes here */}
      </div>
      <div className="flex justify-center space-x-1 pt-2">
        <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default Schedule;
