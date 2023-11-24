"use client"

import React, { useState, useEffect } from 'react';

const TimeCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentTime.toDateString();
  let hours = currentTime.getHours();
  let minutes: string | number = currentTime.getMinutes();
  const period = hours >= 12 ? 'pm' : 'am';

  hours = hours > 12 ? hours - 12 : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div className='flex flex-col gap-2 md:gap-6 items-center text-center'>
      <h3 className='font-bold text-red-200'>{formattedDate}</h3>
      <h2 className='text-4 xl font-bold'>
        {`${hours}:${minutes}${period}`}
      </h2>
    </div>
  );
};

export default TimeCard;
