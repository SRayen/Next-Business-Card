"use client";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

export default function Edit({
  setColor,
  color,
}: {
  setColor: Dispatch<SetStateAction<string>>;
  color: string;
}) {
  const [mounted, Setmounted] = useState(false);
  useEffect(() => {
    Setmounted(!mounted);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="border bg-blue-50 w-72 mx-4">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">White text</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-gray-200"
            checked={color == "white"}
            onChange={() => setColor("white")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Black text</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-black"
            checked={color == "black"}
            onChange={() => setColor("black")}
          />
        </label>
      </div>
    </div>
  );
}
