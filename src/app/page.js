"use client"

import { Dela_Gothic_One } from 'next/font/google'
import { ToastContainer } from "react-toastify";
import Newsletter from "@/app/components/landing/newsletter/newsletter";
import { EVENT_DATE } from "@/constants";

const dela = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="min-h-[100vh] realtive bg-[url(/pat-30-opacity.svg)] p-10">
      <div className="max-w-3xl mx-auto my-50 z-10 py-[50px]">
        <p className={`uppercase font-bold ${dela.className} text-lg lg:text-2xl`}>The first conference for devrels</p>
        <div>
          packed with talks, panels, and networking
        </div>
        <img className="mt-2" src="/web3devrel.svg" />
        <p className="uppercase bg-black inline-block text-sm sm:text-base text-white px-7 py-2 rounded-full mt-2">summit, {EVENT_DATE} - Belgrade</p>
        <div className="mt-10">
          <p>Organizers:</p>
          <div className="flex items-center gap-5 sm:gap-10 mt-3">
            <a href="https://ethbelgrade.rs/" target="_blank" rel="noreferrer noopener">
              <img className="w-full max-w-[200px] max-h-[40px]" src="/eth-belgrade-logo.svg" alt="ETH Belgrade Logo" />
            </a>
            <a href="https://devreluni.com/" target="_blank" rel="noreferrer noopener">
              <img className="w-full max-w-[200px] max-h-[40px]" src="/devreluni-black.png" alt="DevRelUni Logo" />
            </a>
          </div>
        </div>
        <div className="sm:flex items-center justify-between py-10 mt-2">
          <p className={`mb-3 sm:mb-0`}><b>Have something to say?</b> Speaker applications are open</p>
          <a href="https://forms.gle/DQWw8XviBzNDCWag9" target="_blank" rel="noreferrer noopener">
            <div className="bg-black p-3 text-white text-sm min-w-[150px] text-center">
              Apply as a speaker
            </div>
          </a>
        </div>
        <Newsletter />
      </div>

    </div>
  );
}
