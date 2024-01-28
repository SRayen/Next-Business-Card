"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";
import { Share_Tech_Mono } from "next/font/google";
import { useState } from "react";
import Form from "./Form";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const CreditCard = () => {
  const [name, setName] = useState("Rayen Selmen");
  const [email, setEmail] = useState("selmenrayen@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+21699999999");
  const [profession, setProfession] = useState("Software Engineer");
  return (
    <>
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
              height={24}
            />
            <Image
              className="absolute right-0 bottom-0 top-0 my-auto"
              alt=""
              src="/chip.svg"
              width={60}
              height={30}
            />
            <div className="flex flex-col w-full h-full justify-end gap-4 text-white">
              <p className="text-2xl font-bold italic">{profession}</p>
              <p className="text-2xl font-bold ">{phoneNumber}</p>
              <div className="flex gap-9">
                <p className="text-lg uppercase font-extrabold ">{name}</p>
                <p className="text-lg ">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Form
        setName={setName}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
        setProfession={setProfession}
      />
    </>
  );
};
