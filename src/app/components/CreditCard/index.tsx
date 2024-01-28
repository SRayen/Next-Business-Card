"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";
import { Share_Tech_Mono } from "next/font/google";
import { useState } from "react";
import Form from "./Form";
import QRCode from "react-qr-code";
import { HexColorPicker } from "react-colorful";
import Draggable from "react-draggable";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

export type User = {
  name: string;
  email: string;
  phoneNumber: string;
  profession: string;
};

export const CreditCard = () => {
  const [user, setUser] = useState<User>({
    name: "Rayen Selmen",
    email: "selmanerayene95@example.com",
    phoneNumber: "+1234567890",
    profession: "Software Engineer",
  });

  const [color, setColor] = useState("#ffffff");
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
              style={{ color: color }}
              className={`flex flex-col w-full h-full justify-end gap-4`}
            >
              <Draggable>
                <div className="w-16 ml-80 md:w-16 h-8 md:ml-72 cursor-pointer">
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={`name:${user.name}\nemail:${user.email}\nphoneNumber:${user.phoneNumber}\nprofession:${user.profession}\n\nCreated By: SRayen`}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              </Draggable>
              <Draggable>
                <p className="text-2xl font-bold italic cursor-pointer">
                  {user.profession}
                </p>
              </Draggable>
              <Draggable>
                <p className="text-2xl font-bold cursor-pointer">
                  {user.phoneNumber}
                </p>
              </Draggable>
              <div className="flex gap-9">
                <Draggable>
                  <p className="text-lg  font-bold cursor-pointer">
                    {user.name}
                  </p>
                </Draggable>
                <Draggable>
                  <p className="text-lg cursor-pointer">{user.email}</p>
                </Draggable>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Form setUser={setUser} user={user} />

      <HexColorPicker
        className="mx-auto"
        color={color}
        onChange={setColor}
        style={{ width: "360px", height: "150px" }}
      />
    </div>
  );
};
