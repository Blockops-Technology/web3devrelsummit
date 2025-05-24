import { ToastContainer } from "react-toastify";
import Newsletter from "@/app/components/landing/newsletter/newsletter";
import { EVENT_DATE } from "@/constants";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto z-10 pt-[100px] md:pt-[150px] pb-[50px]">
      <img className="mt-2" src="/web3devrel.svg" />
      <p className="uppercase bg-black inline-block text-sm sm:text-base text-white px-7 py-2 rounded-full mt-2">summit, {EVENT_DATE} - Belgrade</p>
      <p className={`uppercase font-bold dela-font text-lg lg:text-2xl mt-10`}>The first conference for Web3 devrels</p>
      <p>
        packed with talks, panels, and networking
      </p>

      <div className="sm:flex items-center justify-between py-10 mt-2">
        <p className={`mb-3 sm:mb-0`}><b>Want to ger inovled?</b> Get tickets, it is free!</p>
        <a href="https://lu.ma/3f3syhyz" target="_blank" rel="noreferrer noopener">
          <div className="bg-black p-3 text-white text-sm min-w-[150px] text-center">
            Get tickets
          </div>
        </a>
      </div>

      <div className="mt-10">
        <p>Organized by:</p>
        <div className="flex items-center gap-5 sm:gap-10 mt-3">
          <a href="https://ethbelgrade.rs/" target="_blank" rel="noreferrer noopener">
            <img className="w-full max-w-[200px] max-h-[40px]" src="/eth-belgrade-logo.svg" alt="ETH Belgrade Logo" />
          </a>
          <a href="https://devreluni.com/" target="_blank" rel="noreferrer noopener">
            <img className="w-full max-w-[200px] max-h-[40px]" src="/devreluni-black.png" alt="DevRelUni Logo" />
          </a>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div >
  );
};

export default Hero;