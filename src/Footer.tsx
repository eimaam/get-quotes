"use client"
import Link from "next/link";

export const Footer = () => {

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
