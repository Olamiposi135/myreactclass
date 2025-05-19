import React, { Suspense } from "react";
import CardSection from "../component/CardSection";
import Footer from "../component/Footer";

import LeaderCard from "../component/LeaderCard";

import Navbar2 from "../component/Navbar2";
import Percentage from "../component/Percentage";
import StaffCard from "../component/StaffCard";
import Loading from "../component/Loading";

const Herosection = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../component/HeroSection"));
      }, 3000);
    })
);

function Homepage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Herosection />
      </Suspense>
      <div className=" flex  max-w-[1000px] mx-auto ">
        <Percentage />
      </div>

      <div className=" flex flex-col md:flex-row items-center max-w-[1140px] mx-auto  p-5  my-20 space-x-6 ">
        <CardSection
          image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1019/LogoECSPublishingGroup1-removebg-preview-1-e1721125158123.png"
          percent="10% list growth"
          header="& sales spike in tough niche"
          details="It's nice that with GetResponse, we have the tools and integrations we need within our budget."
          ctaButton="Read case study"
        />
        <CardSection
          image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1022/living_vision-removebg-preview-e1721125329100.png"
          percent="75% of all public sales"
          header="from email autoresponders"
          details="Together with GetResponses, we've been able to convince customers of
            need, culminating in compelling sales."
          ctaButton="Read case study"
        />
        <CardSection
          image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1025/red-hot-logo1_-removebg-preview-e1721125532901.png"
          percent="Up to $1000"
          header="for every 1000
            emails sent"
          details="Regarding revenue contribution, the email marketing channel is like
            free money for us."
          ctaButton="Read case study"
        />
      </div>

      <div className="flex overflow-scroll max-w-[1000px] mx-auto">
        <StaffCard
          name="Segun"
          position="Manager"
          department="Auditor"
          image="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <StaffCard
          name="Adewale"
          position="Clerk"
          department="Human Resources"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <StaffCard
          name="Olamipo"
          position="GM"
          department="CEO"
          image="https://randomuser.me/api/portraits/men/22.jpg"
        />
      </div>
      <div className="flex w-full mx-auto flex-col md:flex-row">
        <LeaderCard />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
