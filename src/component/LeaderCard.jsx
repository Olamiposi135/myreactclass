import React from "react";

const LeaderCard = () => {
  const leaderList = [
    {
      name: "Chidi Nwosu",
      position: "Production Manager",
      department: "Design",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Niniola Samuel",
      position: "General Manager",
      department: "Web Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Kazeem Awoyay",
      position: "Project Manager ",
      department: "Social Advert",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div>
      <h1 className=" text-3xl font-bold ">OUR LEADERS</h1>

      <section className="flex  m-auto my-5 py-10 flex-col md:flex-row items-center">
        {leaderList.map((leader) => (
          <div className=" max-w-xs bg-white rounded-2xl shadow-md overflow-hidden m-4 ">
            <img
              src={leader.image}
              alt="Pic"
              className="w-ful h-48 object-cover"
            />
            <div className="p-4 ">
              <h2 className="text-xl font-bold text-gray-800">{leader.name}</h2>
              <p className="text-gray-600">
                <span className="font-semibold"> Position: </span>
                {leader.position}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold "> Department: </span>
                {leader.department}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LeaderCard;
