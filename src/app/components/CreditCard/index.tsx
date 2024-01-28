"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";
import { Share_Tech_Mono } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import Form from "./Form";
import QRCode from "react-qr-code";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

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
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1234567890",
    profession: "Software Engineer",
  });

  const [color, setColor] = useState(false);
  console.log("color=>", color);

  const handleQuillChange = (content: any) => {
    setUser({
      ...user, // Spread existing properties
      name: content, // Update name with new content
    });
  };

  let modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
      [{ font: [] }],
    ],
  };

  let formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];

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
              className={`flex flex-col w-full h-full justify-end gap-4 ${
                color && "text-white"
              }`}
            >
              <div className="w-16 ml-80 md:w-16 h-8 md:ml-72">
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={`name:${user.name}\nemail:${user.email}\nphoneNumber:${user.phoneNumber}\nprofession:${user.profession}\n\nCreated By: SRayen`}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <p className="text-2xl font-bold italic">{user.profession}</p>
              <p className="text-2xl font-bold ">{user.phoneNumber}</p>
              <div className="flex gap-9">
                <div
                  className="text-lg"
                  dangerouslySetInnerHTML={{ __html: user.name }}
                />
                {/* <p className="text-lg uppercase font-extrabold ">{name}</p> */}
                <p className="text-lg ">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Form setUser={setUser} user={user} />
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={`${user.name}`} // Use formatted HTML for display
        onChange={(content) => handleQuillChange(content)} // Use handleQuillChange to extract plain text
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
