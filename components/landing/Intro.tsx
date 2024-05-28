import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
export default function Intro() {
  return (
      <div
          id={"intro"}
          className="observe-section intro md:pt-32 min-h-screen !min-w-screen"
      >
        <div className="md:pt-0 pt-[90px] relative z-10 flex flex-col md:items-start items-center justify-center md:justify-end gap-2 sm:gap-6 md:gap-2">
          <div className=" flex flex-col items-center sm:items-start justify-center w-full leading-6 gap-10">
            <div className="flex justify-center items-center w-full text-center leading-[40px] sm:text-start">
              <p className="text-headingSm !w-full text-center font-sans not-italic md:text-heading sm:text-3xl md:leading-[4rem] font-bold">
                Unleash{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#091E3A] via-[#2F80ED] to-[#2D9EE0]">
                the Power of AI
              </span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2D9EE0] via-[#2F80ED] to-[#091E3A]">
                for
              </span>{" "}
                <br /> Flawless Customer Interactions
              </p>
            </div>
            <div className="flex justify-center items-center w-full text-center leading-[22px] sm:text-start">
              <p className="!leading-7 text-center text-base md:!leading-6 text-primary w-full">
                Gain insights, improve agent performance, and boost customer
                satisfaction with conversation intelligence.
              </p>
            </div>
            <div className="w-full flex justify-center text-center leading-[22px] sm:text-start">
              <Button variant={"primary"}>Request a demo</Button>
            </div>
            <div className="w-full px-20 hidden md:flex justify-center text-center leading-[22px] sm:text-start">
              <Image
                  src={"./images/Dashboard.svg"}
                  alt={"Dashboard"}
                  width={1000}
                  height={1000}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
