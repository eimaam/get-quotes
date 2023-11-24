"use client"
import Link from "next/link";
import { useEffect } from "react";

export const Footer = () => {


//     useEffect(() => {
// const getQuote = async () => {
//     const res = await fetch('http://api-get-quotes.vercel.app/api/v1/getquotes', { method: "GET" })
//     console.log("quotesssssss`", await res.json())

// }
// getQuote()

//     },[])

  return (
    <div className="text-center fixed bottom-0 left-0 right-0 ">
      <h2 className="tracking-wider">
        <Link target="_blank" href="https://www.eimaam.dev" className="text-center !text-[#000]">
          Eimaam &copy; 2022.
        </Link>
      </h2>
    </div>
  );
};
