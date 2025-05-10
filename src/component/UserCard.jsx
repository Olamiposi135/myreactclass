import axios from "axios";
import React, { useEffect, useState } from "react";

const UserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");

        setUsers(response.data.users);
        console.log(response.data.users);
      } catch (error) {
        console.error(error, "error");
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      {users.map((u, index) => (
        <div
          key={index}
          className="flex flex-col space-y-3 w-[350px] bg-gray-200 rounded-lg hover:scale-[1.02] duration-500 shadow-2xl  p-4"
        >
          <h1 className="text-center font-bold text-2xl">User Info</h1>
          <div>
            <label className="font-bold ">First Name:</label>
            <p className="font-mono text-lg mt-1">{u.firstName} </p>
          </div>
          <div>
            <label className="font-bold ">Last Name:</label>
            <p className="font-mono text-lg mt-1">{u.lastName} </p>
          </div>
          <div>
            <label className="font-bold ">Age:</label>
            <p className="font-mono text-lg mt-1">{u.age} </p>
          </div>
          <div>
            <label className="font-bold ">Gender:</label>
            <p className="font-mono text-lg mt-1">{u.gender} </p>
          </div>
          <div>
            <label className="font-bold ">Email:</label>
            <p className="font-mono text-lg mt-1">{u.email} </p>
          </div>
          <div>
            <label className="font-bold ">Phone:</label>
            <p className="font-mono text-lg mt-1">{u.phone} </p>
          </div>
          <div>
            <label className="font-bold ">Birth Date:</label>
            <p className="font-mono text-lg mt-1">{u.birthDate} </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCard;
