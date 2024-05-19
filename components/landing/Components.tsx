import React from "react";
import { observer } from "mobx-react";
import Image from "next/image";
import Button from "@/components/Button";

const Components = observer(() => {
  return (
    <div className="observe-section min-w-screen min-h-screen rounded-2xl flex flex-col items-center justify-center">
      <div className="sm:p-8 md:p-16 flex flex-col items-center sm:items-start justify-center w-full leading-6 gap-10">
        <div className="flex justify-center items-center w-full text-center leading-[40px] sm:text-start">
          <p className="text-headingSm !w-full text-center text-black font-sans not-italic md:text-heading sm:text-3xl md:leading-[4rem] font-bold">
            Integrate with any <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] to-[#F8367C]">
              codebase
            </span>{" "}
          </p>
        </div>
        <div className="flex justify-center items-center w-full text-center leading-[22px] sm:text-start">
          <p className="!leading-7 text-center text-base md:!leading-6 text-black/50 w-full">
            Unlike other no-code and low-code builders, Plasmic integrates with
            your existing <br /> codebase, so you're never confined to a walled
            garden.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 text-center leading-[22px] sm:text-start">
          <div>
            <div className=" h-full p-6 rounded-2xl flex flex-col items-start text-start">
              <Image
                src={"/images/hexahedron.svg"}
                alt={`hexahedron`}
                width={50}
                height={50}
              />
              <h3 className="text-xl mt-4 mb-2">
                Build with your{" "}
                <span
                  className={`bg-gradient-to-r from-[#FFB800] to-[#F8367C]`}
                >
                  components
                </span>
              </h3>
              <p className="text-white/70 mb-4">
                Harness the flexibility to create apps that fit your exact
                requirements. Bring your data sources, React components,
                deployment environments, design system, and more.
              </p>
            </div>
          </div>
          <div>ыщьу</div>
          <div>ыщьу</div>
          <div>ыщьу</div>
        </div>
      </div>
    </div>
  );
});

export default Components;
