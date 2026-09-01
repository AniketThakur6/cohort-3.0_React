import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";

const UserPage = () => {
  const [apiUsersData, setApiUsersData] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const getUserData = async () => {
    try {
      let res = await axiosInstance.get("/users");
      setApiUsersData(res.data);
      setIsloading(false);
    } catch (error) {
      console.log("error in fetching userdata", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isloading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-4xl">
        Content is Loading....
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {apiUsersData.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserPage;
