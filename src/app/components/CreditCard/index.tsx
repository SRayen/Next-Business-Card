"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";
import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const CreditCard = () => {
  return (
    <Tilt
      className={`${shareTechMono.className} w-[425px] h-[270px] bg-gradient-to-tr rounded-2xl flex content-center items-center justify-center `}
    >
      <div className="p-8 w-full h-full bg-[url('/bg-1.png')] rounded-3xl">
        <div className="relative w-full h-full">
          <Image
            className="absolute"
            alt=""
            src="/logo.png"
            width={75}
            height={30}
          />
          <Image
            className="absolute right-0 bottom-0 top-0 my-auto"
            alt=""
            src="/chip.svg"
            width={60}
            height={30}
          />
          <div className="flex flex-col w-full h-full justify-end gap-4">
            <h1></h1>
            <p className="text-2xl">4242 4242 4242 4242</p>
            <div className="flex gap-28">
              <p className="text-lg uppercase">John Doe</p>
              <p className="text-lg uppercase">10/24</p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
