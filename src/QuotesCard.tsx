import {useEffect, useState} from 'react'
import { quotables } from './quotes'

import arrow from "../src/assets/arrow.png"
import twitter from "../src/assets/twitter-svgrepo-com.svg"
import whatsapp from "../src/assets/whatsapp-svgrepo-com.svg"
import axios from 'axios'
import { BeatLoader } from 'react-spinners'

export const QuotesCard = () => {
  const random = Math.floor(Math.random() * (20-1) - 1)

  const [quote, setQuote] = useState({
    quote: "GET QUOTES",
    author: "getQuotes"
  })

  const [loading, setLoading] = useState(true)

  function getQuote(){
    setLoading(true)
  axios.get('https://free-quotes-api.herokuapp.com/')
.then(response => {
  if(response.data.author == ""){
    response.data.author = "UNKNOWN"
  }else{
    setQuote(prevState => ({
      ...prevState,
      quote: response.data.quote,
      author: response.data.author
    }))
  }
  setLoading(false) 
})
.catch((error) => {
  console.error(error);
});
}
    useEffect(() => {
      getQuote()
    }, [])

    const nextQuote = () => {
      return getQuote()
    }
    


const tweet = `https://twitter.com/intent/tweet?text=“${quote.quote}%20-%20${quote.author}%20(Quote%20from%20www.getquotes.eimaam.dev)`
const WhatsappShare = `whatsapp://send?text=“${quote.quote}%20-%20${quote.author}%20(Quote%20from%20www.getquotes.eimaam.dev)`
    
  return (
    <div className='m-auto h-auto flex flex-col gap-4'>
      <div className='relative bg-gray-200 w-4/5 sm:w-72 rounded-tr-lg rounded-bl-lg m-auto p-3 text-justify shadow-2xl'>
        <h1 className='absolute -left-3 md:-left-5 -top-4 md:-top-8 text-6xl md:text-8xl font-fredoka'>
          “
          </h1>
        {loading 
        ? 
        <div className='h-32 w-42 flex m-auto justify-center items-center'>
          <BeatLoader size={20} />
        </div>
         : 
         <div className='my-2 '>
          <p className='text-xl font-space italic px-3 '>{quote.quote}”</p>
          <h3 className='text-right text-lg font-bold my-3 mb-8 px-2 tracking-wider'>- {quote.author}</h3>
        </div>
        }
        {!loading && 
        <button type='button' onClick={nextQuote} className='z-10 absolute right-2 bg-green-400 hover:bg-blue-200 hover:text-black text-white text-lg font-bold py-2 px-4 rounded-tr-large rounded-bl-large'>
          GET QUOTE
        </button>}
      </div>
      {!loading &&
      <div className='flex-col w-20 ml-auto my-4'>
        <img src={arrow} alt="spring arrow" className='h-20 m-auto rotateXX'/>
        <p className='font-pt italic text-white'>Click to generate <br /> new quote...</p>
      </div>
      }

      {!loading &&
      <div className='flex flex-col relative bottom-56 mx-4 gap-1'>
          <div className='flex gap-4 static '> 
            <a className="twitter-share-button" target="_blank" href={tweet}>
              <img src={twitter} alt="twitter logo svg" className='w-auto h-10 share--icon'/>
            </a>
            <a href={WhatsappShare} target="_blank">
              <img src={whatsapp} alt="whatsapp logo svg" className='w-auto h-10 share--icon'/>
            </a>
          </div>
          <div>
            <p className='font-pt italic text-white mx-5'>Share</p>
          </div>
      </div>
      }
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
