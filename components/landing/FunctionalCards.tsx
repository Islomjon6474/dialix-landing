import React from "react";
import { observer } from "mobx-react";
import Image from "next/image";
import Button from "@/components/Button";

export const functionalCards = [
  {
    title: "Custom Checklist",
    description:
        "Streamline your workflow with custom-made checklists that adapt to your business and meticulous control.",
    image: "./images/checklist.svg",
  },
  {
    title: "Sentiment Analysis",
    description:
        "Mine valuable insights from customer phone calls. Uncover hidden emotions and feedback to understand audience.",
    image: "./images/sentiment.svg",
  },
  {
    title: "Gender Classification",
    description:
        "Craft targeted marketing campaigns and personalize communication for a more engaging customer experience.",
    image: "./images/gender.svg",
  },
  {
    title: "Key Topics",
    description:
        "Turn phone conversations into a goldmine of insights to make data-driven decisions that your customers.",
    image: "./images/key-topics.svg",
  },
  {
    title: "Periodical Statistics",
    description:
        "Gain access to in-depth call data analysis for tracking trends, measuring growth, and making informed decisions.",
    image: "./images/statistics.svg",
  },
  {
    title: "Call Summary",
    description:
        "Efficient review and actionable insights, driving continuous improvement in business processes.",
    image: "./images/summary.svg",
  },
];

const FunctionalCards = observer(() => {
  return (
      <div
          id={`cards`}
          className="observe-section dark py-30 relative min-w-screen min-h-screen bg-[#03020A] rounded-2xl flex flex-col items-center justify-center"
      >
        <Image
            className="absolute top-0 z-10"
            src="./images/half-moon.svg"
            alt="Half moon"
            width={1000}
            height={1000}
        />
        <div className="static !text-white top-0 z-20 p-8 sm:p-16 md:p-32 flex flex-col items-center sm:items-start justify-center w-full leading-6 gap-10">
          <div className="flex justify-center items-center w-full text-center leading-[40px] sm:text-start">
            <p className="text-headingSm !w-full text-center text-white font-sans not-italic md:text-heading sm:text-3xl md:leading-[4rem] font-bold">
              Unlock{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9796F0] to-[#FBC7D4]">
              the Potential
            </span>{" "}
            </p>
          </div>
          <div className="flex justify-center items-center w-full text-center leading-[22px] sm:text-start">
            <p className="!leading-7 text-center text-base md:!leading-6 text-white/50 w-full">
              Manage enterprise-level growth with ease. Scale up and maintain
              control, even as your application grows and evolves.
            </p>
          </div>
          <div className="w-full flex justify-center text-center leading-[22px] sm:text-start">
            <Button
                variant={"plainPrimary"}
                containerClassName={`!rounded-full bg-gradient-four-colors`}
            >
              Request a demo
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {functionalCards.map((card, index) => (
                <div
                    key={card.title}
                    // className="bg-[#2E2D31] rounded-2xl transition-all duration-300 ease hover:bg-gradient-four-colors p-[1px]"
                    className="rounded-2xl card"
                >
                  <div className="bg-[#0B0A12] relative z-10 h-full p-6 rounded-2xl flex flex-col items-start text-start">
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={300}
                        height={300}
                    />
                    <h3 className="text-xl mt-4 mb-2">{card.title}</h3>
                    <p className="text-white/70 mb-4">{card.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
});

export default FunctionalCards;
