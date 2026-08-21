import React from "react";

const UserCard = ({user}) => {
  return (
    <div className="text-xl  shrink-0 flex flex-col gap-5 p-5 w-70 bg-zinc-900 rounded-lg border-2 border-zinc-800">
      <div className="h-50 w-full overflow-hidden rounded-lg bg-zinc-600">
        <img
          className="h-full w-full object-cover object-center"
          src={user.image}
          alt=""
        />
      </div>
      <h5>Name - {user.name}</h5>
      <h5>Password - {user.password}</h5>
    </div>
  );
};

export default UserCard;
