import React, { Dispatch, SetStateAction } from "react";

export default function Form({
  setName,
  setEmail,
  setPhoneNumber,
  setProfession,
}: {
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  setProfession: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div>
      <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your Name"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your Email address"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Profession</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your Email address"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setProfession(e.target.value)}
        />
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="text"
          placeholder="Enter your Phone number"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </form>
    </div>
  );
}
