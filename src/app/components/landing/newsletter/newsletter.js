import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";
import { toast } from "react-toastify";

const FORMSPARK_FORM_ID = "IsHJzlbE6";

const Newsletter = () => {
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
    <div className="bg-gray-100 p-10 border mt-10">
      <p className="mb-2"><b>Wen tickets?</b> Subscribe now and get notified</p>
      <div className="md:flex gap-2">
        <input className="bg-gray-50 p-3 border w-full" value={email} onChange={onInputChange} type="text" placeholder="enter your email" />
        <div className="bg-black p-3 text-white text-sm min-w-[100px] flex items-center justify-center cursor-pointer" onClick={submitForm}>
          <p className='m-0'>{inProgess ? "Submitting..." : "Subscribe"}</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;