"use client"

import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import { Dela_Gothic_One } from 'next/font/google'
import { useFormspark } from "@formspark/use-formspark";
import { toast, ToastContainer } from "react-toastify";

const dela = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})

const FORMSPARK_FORM_ID = "IsHJzlbE6";

export default function Home() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [email, setEmail] = useState("");
  const [inProgess, setInProgress] = useState(false);
  const onInputChange = (e) => setEmail(e.target.value);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const submitForm = async (e) => {
    if (!email) {
      toast.error("Email required")
      return;
    };

    if (!validateEmail(email)) {
      toast.error("Not a valid email address")
      return;
    }

    setInProgress(true);

    await submit({ email });
    toast.success("Form submitted");
    setInProgress(false);
  };

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
            <input className="bg-gray-50 p-3 border w-full" value={email} onChange={onInputChange} type="text" placeholder="enter your email" />
            <div className="bg-black p-3 text-white text-sm min-w-[100px] flex items-center justify-center cursor-pointer" onClick={submitForm}>
              <p className='m-0'>{inProgess ? "Submitting..." : "Subscribe"}</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        toastClassName=" text-sm !text-black border"
        hideProgressBar="true"
      />
    </div>
  );
}
