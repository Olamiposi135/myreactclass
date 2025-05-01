import React from "react";

const Percentage = () => {
  const percentRate = [
    {
      percent: "100%",
      rating: "average list growth",
      details: "for all paid plans in the first 30 days ",
    },
    {
      percent: "90%",
      rating: "deliverability rate",
      details: "for 160+ countries",
    },
    {
      percent: "350k+",
      rating: "customers worldwide",
      details: "trust us with their email marketing",
    },
    {
      percent: "24/7",
      rating: " support from a 5-star rated ",
      details: "Customer Success Team",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto my-4 ">
      <h1 className="font-bold text-3xl text-center mb-16">Why GetResponse?</h1>

      <section className="flex flex-col md:flex-row  md:space-x-5 gap-6 mb:my-0">
        {percentRate.map((response) => (
          <div className="max-w-sm flex-1">
            <h1 className="font-bold text-[50px] mb:2 md:mb-3">
              {response.percent}
            </h1>
            <p className="text-[18px]">
              <span className="mr-1">
                <b> {response.rating}</b>
              </span>
              {response.details}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Percentage;
