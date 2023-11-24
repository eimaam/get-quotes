"use client";

import Image from "next/image";
import Link from "next/link";
import { BeatLoader } from "react-spinners";
import Button from "./Button";
import { useEffect, useState } from "react";
import Loader from "@/loading";

export interface Quote {
  id: number;
  category: string;
  quote: string;
  author: string;
  description: string;
}

export async function getQuote() {
  try {
    const res = await fetch(
      "https://api-get-quotes.vercel.app/api/v1/getquotes/random",
      { method: "GET", next: { revalidate: 0 } }
    );

    const result = await res.json();
    return result.quote;
  } catch (error) {
    console.error("Error fetching quote", error);
  }
}

export const QuoteCard = () => {
  async function newQuote() {
    setLoading(true);
    const data = await getQuote();
    if (data) {
      setQuote(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    newQuote();
  }, []);

  const [quote, setQuote] = useState<Quote>({
    id: 1,
    quote: "getting quotes...",
    author: "getQuotes",
    category: "random",
    description: "random",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const tweet = `https://x.com/intent/tweet?text=“${quote?.quote}”%20-%20${quote?.author}%0A(Quote%20from%20www.getquotes.eimaam.dev)`;
  const WhatsappShare = `whatsapp://send?text=“${quote?.quote}”%20-%20${quote?.author}%0A(Quote%20from%20www.getquotes.eimaam.dev)`;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="m-auto flex flex-col w-full md:w-[500px] md:h-[250px] gap-4">
      <div className="w-[95%] md!w-[500px] md:!h-[250px] relative bg-gray-200 rounded-tr-[20%] rounded-bl-[20%] m-auto p-3 text-justify shadow-2xl">
        <h1 className="absolute -left-3 md:-left-5 -top-3 md:-top-7 text-6xl md:text-9xl ">
          “
        </h1>
        {loading ? (
          <div className="h-32 w-44 flex m-auto justify-center items-center">
            <BeatLoader size={10} />
          </div>
        ) : (
          <div className="my-2">
            <p className="text-base md:text-xl italic px-3 ">{quote?.quote}”</p>
            <h3 className="text-right text-sm md:text-lg font-bold my-3 mb-8 px-2 tracking-wider">
              - {quote?.author}
            </h3>
          </div>
        )}

        <Button setQuote={setQuote} />
      </div>
      {quote && (
        <div className="flex-col w-20 ml-auto mr-8 mt-7">
          <Image
            src="/arrow.png"
            alt="spring arrow"
            height={80}
            width={80}
            quality={100}
            className="h-20 m-auto rotate-[180deg]"
          />
          <p className="italic text-white">
            Click to generate <br /> new quote...
          </p>
        </div>
      )}

      {quote && (
        <div className="flex flex-col relative bottom-[260px] mx-4 gap-1">
          <div className="flex gap-4 static">
            <Link target="_blank" href={tweet}>
              <Image
                src="/twitter.svg"
                alt="twitter logo svg"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
            <Link href={WhatsappShare} target="_blank">
              <Image
                src="/whatsapp.svg"
                alt="whatsapp logo svg"
                className="rounded-full"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div>
            <p className="italic text-white mx-5">Share</p>
          </div>
        </div>
      )}
    </div>
  );
};
