
export const Time = () => {
    const d = new Date()
    const date = new Date().toDateString()
    let hour:number = d.getHours()
    let mins:any = d.getMinutes()
    let period:string = 'am'

    if(hour >= 12){
        period = 'pm'
    }
    if(hour > 12){
        hour = hour - 12
    }
    if(mins < 10){
        mins = "0"+mins
    }

  return (
    <div className='flex flex-col gap-2 md:gap-6 w-screen text-center'>
            <h1 className='font-space font-bold text-3xl'>{date}</h1>
            <h2 className='font-space text-3xl md:text-6xl font-bold'>
                {`${hour}:${mins}${period}`}
            </h2>
    </div>
  )
}
