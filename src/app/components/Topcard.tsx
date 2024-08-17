import React from "react";
import Image from "next/image";
const Topcard = () => {
  return (
    <div className="mt-4 mx-3 mb-20">
      <div>
        <button className="rounded-full bg-white  p-2 px-4 ">All</button>
        <button className="rounded-full bg-slate-200/40 text-white  p-2 px-4 mx-3 ">
          Music
        </button>
        <button className="rounded-full bg-slate-200/40 text-white  p-2 px-4  ">
          Prodcast
        </button>
      </div>
      <div className="flex flex-row group">
        <div className="flex flex-row items-center mt-5  h-34 w-72 bg-slate-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 ">
          <Image
            src="https://i.scdn.co/image/ab67706f000000025a556dc89b13cb1e833a1f9f"
            alt="rayan"
            width={500}
            height={500}
            className="w-12 h-12"
          />
          <p className="text-white ml-2 font-semibold">Hot Hit Tamil</p>
          <button className="group-hover:visible invisible bg-green-500 w-10 h-10 rounded-full p-2 absolute  right-4">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="Svg-sc-ytk21e-0 bneLcE"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </button>
        </div>

        <div className="group flex flex-row items-center mt-5 ml-3  h-34 w-72 bg-slate-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 ">
          <Image
            src="https://i.scdn.co/image/ab67616d00001e029429bed3c9832f874dd22f07"
            alt="rayan"
            width={500}
            height={500}
            className="w-12 h-12"
          />
          <p className="text-white ml-2 font-semibold">
            Race in Cyber Threed 
          </p>
          <button className="group-hover:visible invisible bg-green-500 w-10 h-10 rounded-full p-2 absolute  right-4">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="Svg-sc-ytk21e-0 bneLcE"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topcard;
