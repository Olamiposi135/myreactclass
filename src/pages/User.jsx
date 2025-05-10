import React from "react";
import { Link } from "react-router";
import UserCard from "../component/UserCard";

const User = () => {
  return (
    <section className=" bg-gradient-to-r from-blue-600 via-green-700 to-red-500 min-h-screen py-20 px-10 ">
      <Link
        to="/"
        className=" px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 "
      >
        Back home
      </Link>
      <div className="flex items-center flex-wrap gap-4 mt-10 flex-column md:flex-row">
        <UserCard />
      </div>
    </section>
  );
};

export default User;
