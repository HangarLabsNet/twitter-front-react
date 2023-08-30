import { Footer, Modal, SocialButton } from "./components";
import { logo, logoGray } from "../../assets";
import { useState } from "react";

export default function SignupPage() {
  const [showModal, setShowModal] = useState(false);

  const changeModal = () => {
    return setShowModal(false)
  }

  return (
    <>
      <div className="flex justify-center md:h-[95vh]">
        <div className="w-4/6 bg-black md:flex justify-center items-center hidden">
          <img src={logoGray} alt="Logo of twitter" className="w-44 h-42" />
        </div>
        <div className="w-full md:w-2/6 flex bg-white px-5">
          <div className="mt-28 flex flex-col gap-3 md:gap-10">
            <img src={logo} alt="Logo of twitter" className="w-7 h-6" />
            <h2 className="text-3xl lg:text-[72px] font-black font-roboto">
              Happening now
            </h2>
            <h3 className="mt-4 md:mt-7 text-xl lg:text-[42px] font-black font-roboto">
              Join Twitter today
            </h3>
            <div className="mt-4 flex flex-col gap-5">
              <SocialButton text="Sign up with Google" src="google" />
              <SocialButton text="Sign up with Apple" src="apple" />
              <SocialButton text="Sign up with phone or email" setShowModal={setShowModal} />
            </div>
            <div className="mt-15">
              <p className="font-roboto mt-5">
                By singing up you agree to the&nbsp;
                <span className="text-info cursor-pointer">
                  Terms of Service&nbsp;
                </span>
                and&nbsp;
                <span className="text-info cursor-pointer">
                  Privacy Policy&nbsp;
                </span>
                including&nbsp;
                <span className="text-info cursor-pointer">Cookie Use</span>.
              </p>
              <p className="font-roboto mt-3">
                Already have an account?
                <span className="text-info cursor-pointer"> Log in </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal isInvisible={showModal} onClose={changeModal}/>
    </>
  );
}
