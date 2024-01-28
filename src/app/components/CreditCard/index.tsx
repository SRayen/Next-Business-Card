"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";
import { Share_Tech_Mono } from "next/font/google";
import { useState } from "react";
import Form from "./Form";
import QRCode from "react-qr-code";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const CreditCard = () => {
  const [name, setName] = useState("Rayen Selmen");
  const [email, setEmail] = useState("selmenrayen95@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+21699999999");
  const [profession, setProfession] = useState("Software Engineer");

  const [color, setColor] = useState(false);
  console.log("color=>", color);

  return (
    <div>
      <Tilt
        className={`${shareTechMono.className} w-[425px] h-[270px] bg-gradient-to-tr rounded-2xl flex content-center items-center justify-center `}
      >
        <div className="mx-4 p-4  md:p-8 w-full h-full bg-[url('/bg-1.png')] rounded-3xl">
          <div className="relative w-full h-full">
            <div className="flex gap-10">
              <Image
                className="absolute"
                alt=""
                src="/logo.png"
                width={75}
                height={24}
              />
            </div>

            <div
              className={`flex flex-col w-full h-full justify-end gap-4 text-${
                color ? "black" : "white"
              }`}
            >
              <div className="w-16 ml-80 md:w-16 h-8 md:ml-72">
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={`name:${name}\nemail:${email}\nphoneNumber:${phoneNumber}\nprofession:${profession}\n\nCreated By: SRayen`}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <h1>{color}</h1>
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
      <button
        className="btn btn-outline ml-32"
        onClick={() => setColor(!color)}
      >
        Color
      </button>
    </div>
  );
};
