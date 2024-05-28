import React from "react";
import { observer } from "mobx-react";
import Image from "next/image";
import Button from "@/components/Button";

const Footer = observer(() => {
  return (
      <div className="observe-section dark footer font-inter py-30 relative min-w-screen md:min-h-screen bg-[#03020A] flex flex-col items-center justify-center">
        <div className="container border-b border-b-[#1A191E] !text-white top-0 z-20 p-8 sm:p-16 md:p-32 flex flex-col items-center sm:items-start justify-center w-full leading-6 gap-10">
          <div className="flex justify-center items-center w-full text-center leading-[40px] sm:text-start">
            <p className="text-headingSm !w-full text-center text-white font-sans not-italic md:text-heading sm:text-3xl md:leading-[4rem] font-bold">
              Elevate your business <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9796F0] to-[#FBC7D4]">
              with Dialix AI
            </span>{" "}
            </p>
          </div>
          <div className="flex justify-center items-center w-full text-center leading-[22px] sm:text-start">
            <p className="!leading-7 text-center text-base md:!leading-6 px-4 rounded-full border border-white/10 text-white w-fit">
              Unlimited time on free plan
            </p>
          </div>
          <div className="w-full flex justify-center text-center leading-[22px] sm:text-start">
            <Button variant={"white"} containerClassName={`!rounded-full`}>
              Request a demo
            </Button>
          </div>
        </div>
        <div className="container !text-white/40 top-0 z-20 p-8 flex flex-col items-center sm:items-start justify-center w-full leading-6 gap-10">
          Copyright © 2023 Dialix, Inc. All rights reserved.
        </div>
      </div>
  );
});

export default Footer;