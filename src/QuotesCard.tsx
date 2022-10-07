import React, {useState} from 'react'
import { quotables } from './quotes'

import arrow from "../src/assets/arrow.png"

export const QuotesCard = () => {
  const random = Math.floor(Math.random() * (20-1) - 1)

  const [quote, setQuote] = useState(quotables[random])


    // const quotations = quotables.map(item => {
    //     setQuote(item[random])
    // })

    
    // setQuote(quotables[random])

    
  return (
    <div className='m-auto flex flex-col gap-4'>
      <div className='relative bg-gray-200 w-4/4 sm:w-72 rounded-tr-lg rounded-bl-lg m-auto p-4 text-justify shadow-2xl'>
        <h1 className='absolute -left-5 -top-6 text-8xl font-fredoka'>“</h1>
        <div className='my-2'>
          <p className='text-xl font-space italic px-3'>{quote.quote}”</p>
          <h3 className='text-right text-lg font-bold my-3 px-2 tracking-wider'>- {quote.author}</h3>
        </div>
        <button className='z-10 absolute right-2 bg-green-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-tr-large rounded-bl-large'>GET QUOTE</button>
      </div>
      <div className='flex-col w-20 ml-auto'>
        <img src={arrow} alt="spring arrow" className='h-20 m-auto'/>
        <p className='font-pt italic text-white'>Click to generate <br /> new quote...</p>
      </div>
    </div>
    // <div className='m-auto flex flex-col border'>
    //   <div className='relative w-4/4 sm:w-72 bg-cyan-300 rounded-tr-lg rounded-bl-lg border m-auto p-4 text-justify'>
    //     <h1 className='absolute -left-3 -top-6 text-8xl font-fredoka'>“</h1>
        
    //     <div className='my-2'>
    //       <p className='text-xl font-space italic'>{quote.quote}”</p>
    //       <h3 className='text-right text-lg font-bold'>- {quote.author}</h3>
    //     </div>
    //     <button className='z-10 absolute right-2 bg-green-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-tr-large rounded-bl-large'>GET QUOTE</button>
    //   </div>
    //   <div className='absolute right-16 sm:right-40 md:right-60 xl:right-90 sm:bottom-52 flex-col w-20'>
    //     <img src={arrow} alt="spring arrow" className=' h-20 '/>
    //     <p className='font-pt italic absolute -left-10  text-white'>Click to generate <br /> new quote...</p>
    //   </div>
    // </div>
  )
}
