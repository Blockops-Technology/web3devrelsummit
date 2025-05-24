"use client"

import Hero from "@/app/components/landing/hero/hero";
import Speakers from "@/app/components/landing/speakers/speakers";

export default function Home() {
  return (
    <div className="min-h-[100vh] realtive bg-[url(/pat-30-opacity.svg)] p-5 sm:p-10">
      <Hero />
      <Speakers />
    </div>
  );
}
