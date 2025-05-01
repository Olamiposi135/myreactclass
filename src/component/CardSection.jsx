import { FaArrowRightLong } from "react-icons/fa6";

export default function CardSection({
  image,
  percent,
  header,
  details,
  ctaButton,
}) {
  return (
    <section className=" flex flex-col flex-1 md:flex-row   py-5  mb-10  ">
      <div className=" w-[90%] md:w-[100%]  mx-auto cursor-pointer p-5  rounded-xl border-4 shadow-xl border-transparent hover:border-[#00a2ff]  bg-white ease-in-out ">
        <img
          src={image}
          alt="logo"
          className="w-[90px] h-[50px] mb-[30px] py-3"
        />
        <h1 className="font-bold text-[30px] mb-5 leading-9 ">
          <span className="text-[#00a2ff] ">{percent}</span> {header}
        </h1>
        <p className=" py-5 mb-7">{details}</p>
        <button className="whitespace-nowrap py-3 px-6 bg-[#38a2ff] text-lg text-white rounded-3xl font-bold border-2 border-[#3393f2] hover:bg-[#fbe30c] hover:text-black hover:border-[#e3d500]  transition-all duration-300 ease-in-out">
          {ctaButton} <FaArrowRightLong className="inline-block mr-2 " />
        </button>
      </div>
    </section>
  );
}
