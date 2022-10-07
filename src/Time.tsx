import React from 'react'

export const Time = () => {
    const d = new Date()
    const date = new Date().toDateString()
    // const startOfDay = new Date(date.getDay())
    let hour:number = d.getHours()
    const mins:number = d.getMinutes()
    let period:string = 'am'

    if(hour >= 12){
        period = 'pm'
    }
    if(hour > 12){
        hour = hour - 12
    }

    console.log(hour, mins)
    

  return (
    <div className='flex flex-col gap-2 md:gap-6 w-screen text-center'>
            <h1 className='font-fredoka text-3xl md:text-6xl'>{date}</h1>
            <h2 className='font-space text-3xl md:text-6xl font-bold'>{`${hour}:${mins}${period}`}</h2>
    </div>
  )
}
