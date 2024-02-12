import React, { Dispatch, SetStateAction } from "react";
import { User } from ".";

export default function Form({
  setUser,
  user,
}: {

  setUser: Dispatch<SetStateAction<User>>;
  user: User;
}) {
  return (
    <div>
      <form className="mt-4 mb-2 max-w-screen-lg flex flex-col gap-1 ml-10">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your Name"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={
            user.name && !user.name.includes("<")
              ? user.name
              : user.name?.replace(/<[^>]*>/g, "")
          }
        />
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your Email address"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />
        <label htmlFor="email">Profession</label>
        <input
          id="profession"
          type="text"
          placeholder="Enter your Email profession"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setUser({ ...user, profession: e.target.value })}
          value={user.profession}
        />
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="text"
          placeholder="Enter your Phone number"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
          value={user.phoneNumber}
        />
      </form>
    </div>
  );
}
