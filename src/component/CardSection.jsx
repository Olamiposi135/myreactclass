import { FaArrowRightLong } from "react-icons/fa6";

export default function CardSection() {
  return (
    <section className=" min-h-screen flex flex-col  max-w-[1140px] m-auto  p-5  mb-10">

      <h1 className="text-center mb-10 font-bold text-[35px]">Why GetResponse?</h1>
      
      <div className="flex flex-col md:flex-row items-center w-[90%] m-auto gap-6 lg:gap-14 mb-10 ">
        <div className="text-center md:text-left flex-1 mt-2 w-full p-5 ">
          <h1 className="font-bold text-5xl">100%</h1> <br />
          <p className="text-[18px] ">average <b>list growth</b> for all paid plans in the <b>first 30 days</b></p>
        </div>
        <div className="text-center md:text-left flex-1 mt-2 w-full p-5 mb-4">
          <h1 className="font-bold text-5xl">99%</h1> <br />
          <p className="text-[18px]"><b>deliverability rate</b> for 160+ countries</p>
        </div>
        <div className="text-center md:text-left flex-1 mt-2 w-full p-5 flex-1">
          <h1 className="font-bold text-5xl">350k+</h1> <br />
          <p className="text-[18px]"><b>customers worldwide </b> 
            trust us with their email
            marketing</p>
        </div>
        <div className="text-center md:text-left flex-1 mt-2 w-full p-5 flex-1">
          <h1 className="font-bold text-5xl">24/7</h1> <br />
          <p className="text-[18px]">support from a <b>5-star rated</b> Customer Success Team</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mb-4 p-7 flex-wrap">
        <div className="flex-1 cursor-pointer p-6  rounded-xl border-4 shadow-xl border-transparent hover:border-[#00a2ff]  transition-all duration-300 ease-in-out">
          <img src="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1019/LogoECSPublishingGroup1-removebg-preview-1-e1721125158123.png" alt="" className="w-[55px] 4-[40px] mb-[24px]"/>
          <h1 className="font-bold text-[28px] mb-5 leading-9 "><span className="text-[#00a2ff] ">10% list growth</span> & sales spike in tough niche</h1>
          <p className="py-5 mb-7">It's nice that with GetResponse, we have the tools and integrations we need within our budget.</p>
          <button className="whitespace-nowrap py-3 px-8 bg-[#38a2ff] text-lg text-white rounded-3xl font-bold border-2 border-[#3393f2] hover:bg-[#fbe30c] hover:text-black hover:border-[#e3d500]  transition-all duration-300 ease-in-out">
            Read case study <FaArrowRightLong className="inline-block mr-2 " />  
              </button>
        </div>

        <div className="flex-1 cursor-pointer p-6  rounded-xl border-4 shadow-xl border-transparent hover:border-[#00a2ff]  transition-all duration-300 ease-in-out">
          <img src="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1022/living_vision-removebg-preview-e1721125329100.png" alt="" className="w-[106px] h-[40px] mb-[24px] "/>
          <h1 className="font-bold text-[28px] mb-5 leading-9"><span className="text-[#00a2ff] ">75% of all public sales</span> from email autoresponders</h1>
          <p className="py-5 mb-7">Together with GetResponses, we've been able to convince customers of need, culminating in compelling sales.</p>
          <button className="whitespace-nowrap py-3 px-8 bg-[#38a2ff] text-lg text-white rounded-3xl font-bold border-2 border-[#3393f2] hover:bg-[#fbe30c] hover:text-black hover:border-[#e3d500]  transition-all duration-300 ease-in-out">
            Read case study <FaArrowRightLong className="inline-block mr-2 " />  
              </button>
        </div>
        <div className="flex-1 cursor-pointer p-6  rounded-xl border-4 shadow-xl border-transparent hover:border-[#00a2ff]  transition-all duration-300 ease-in-out">
        
          <img src="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1025/red-hot-logo1_-removebg-preview-e1721125532901.png" alt="" className="w-[145px] h-[40px] mb-[24px]"/>
          
          <h1 className="font-bold text-[28px] mb-5 leading-9"><span className="text-[#00a2ff] ">Up to $1000</span> for every 1000 emails sent</h1>
          <p className="py-5 mb-7">Regarding revenue contribution, the email marketing channel is like free money for us.</p>
          <button className=" whitespace-nowrap gap-2 py-3 px-8 bg-[#38a2ff] text-lg text-white rounded-3xl font-bold border-2 border-[#3393f2] hover:bg-[#fbe30c] hover:text-black hover:border-[#e3d500]  transition-all duration-300 ease-in-out">
            Read case study <FaArrowRightLong className="inline-block mt-1" />  
              </button>
          
        </div>
      </div>
    </section>
  )
}