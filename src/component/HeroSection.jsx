import { FaArrowRight } from "react-icons/fa";


function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center max-w-[1400px] m-auto ">
      <div className="text-center space-y-7 w-[90%] m-auto">
        <p className="text-[#717171] text-capitalize text-[14px] font-bold">
          ALL-IN-ONE MARKETING SOFTWARE
        </p>
    <h1 className="text-[62px] font-bold leading-tight">
          Send emails, automate marketing,
        monetize content – in one place
     </h1>
      <p className="text-[18px] max-w-[800px] m-auto">
          Grow your business and boost revenue with an easy, affordable platform that brings email,
        automation, online courses and paid newsletters together.
        </p>
        


    <button className="text-xl font-bold px-10 py-4 rounded-3xl w-fit border-2 border-[#e3d500] bg-[#fbe30c] hover:bg-[#00a2ff] hover:text-white hover:border-[#2c85d5]">  Start 30-day FREE trial <FaArrowRight className="inline-block mr-2 mb-1" />  
    </button>
    <p className="text-xs ">
    Try us free  |  No credit card required  |  Cancel anytime
    </p>
      </div>
    </section>
  )
}

export default HeroSection;