import { ClockLoader } from "react-spinners";

import React from "react";

const Loader = () => {
  return (
    <div className="items-center gap-4 flex flex-col justify-center border-3">
      <h2><ClockLoader className="text-lg" /></h2>
      <p className="italic text-lg mt-2">getting Quote...</p>
      <p className="italic text-base">1... 2... 3</p>
    </div>
  );
};

export default Loader;
