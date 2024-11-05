import { Dela_Gothic_One } from 'next/font/google'

const dela = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="h-[100vh] realtive flex items-center justify-center">
      <div className="absolute w-full h-full bg-[url(/pat.svg)] opacity-30 z-0" />
      <div className="mx-5 my-50 z-10">
        <p className={`uppercase font-bold ${dela.className} text-lg lg:text-2xl`}>The conference for devrels</p>
        <div>
          packed with talks, panels and networking
        </div>
        <img className="mt-2" src="/web3devrel.svg" />
        <p className="uppercase bg-black inline-block text-sm sm:text-base text-white px-7 py-2 rounded-full mt-2">summit, June 1st 2025 - Belgrade</p>
        <div className="bg-gray-100 p-10 border mt-10">
          <p className="mb-2"><b>Wen tickets?</b> Subscribe now and get notified</p>
          <div className="md:flex gap-2">
            <input className="bg-gray-50 p-3 border w-full" />
            <div className="bg-black p-3 text-white text-sm min-w-[100px] flex items-center justify-center">
              <p className='m-0'>Subscribe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
