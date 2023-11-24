"use client";
import React, { Dispatch, FC, SetStateAction } from "react";
import { Quote, getQuote } from "./QuoteCard";

interface Props {
  setQuote: Dispatch<SetStateAction<Quote>>;
}

const Button: FC<Props> = ({ setQuote }) => {
  const nextQuote = async () => {
    const data = await getQuote();

    setQuote(data);
  };

  return (
    <button
      type="button"
      onClick={nextQuote}
      className="z-10 absolute right-2 bg-green-400 hover:bg-blue-200 hover:text-black text-white text-lg font-bold py-2 px-4 rounded-tr-large rounded-tr-[55%] rounded-bl-[55%] rounded-bl-large"
    >
      Get Quote
    </button>
  );
};

export default Button;
