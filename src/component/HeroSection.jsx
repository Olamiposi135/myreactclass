import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";


function HeroSection() {
 
  const [isSubscribe, setSubscription] = useState(false)
  const subscribe = () => {
    setSubscription(true)
  }
  

  return (
    <section className="h-screen flex flex-col justify-center items-center max-w-[1400px] m-auto px-4 mt-10 lg:mt-0">
      <div className="text-center space-y-7 w-[90%] m-auto">
        <p className="lg:text-[#717171] text-red-400 text-capitalize text-[14px] font-bold">
          ALL-IN-ONE MARKETING SOFTWARE
        </p>
    <h1 className="lg:text-[62px] text-[42px] font-bold leading-tight">
          Send emails, automate marketing,
        monetize content – in one place
     </h1>
      <p className="lg:text-black text-lime-700 text-[18px] max-w-[800px] m-auto">
          Grow your business and boost revenue with an easy, affordable platform that brings email,
        automation, online courses and paid newsletters together.
        </p>
        


    
      <button onClick={subscribe} className="text-lg lg:text-xl font-bold px-6 lg:px-10 py-4 rounded-3xl w-fit border-2 border-[#e3d500] bg-[#fbe30c] hover:bg-[#00a2ff] hover:text-white hover:border-[#2c85d5] whitespace-nowrap">  {isSubscribe ? "You are now Subcribed" : "Start 30-days Free trial"} 
      <FaArrowRight className="inline-block mr-2 mb-1" />  
    </button>
    
    <p className="text-xs ">
    Try us free  |  No credit card required  |  Cancel anytime
    </p>
      </div>
    </section>
  )
}

export default HeroSection;