import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import VoyageAnimation, { IVoyageAnimationProps } from "./VoyageAnimation";
import { forceVader } from "@/assets/charactors";
import Chat from "./Chat";
import Typewriter from "./Typewriter";

interface IFalicorniaFound extends IVoyageAnimationProps {
  tripLogs: {
    timeTaken: number;
    distanceCovered: number;
    speed: number;
  };
}

const FalicorniaFound: FC<IFalicorniaFound> = ({ tripLogs, ...props }) => {
  const { timeTaken, distanceCovered, speed } = tripLogs;
  return (
    <div className="result">
      <VoyageAnimation {...{ ...props }} />
      <div>
        <div className="flex items-baseline">
          <Image
            width={500}
            height={500}
            referrerPolicy="no-referrer"
            src={forceVader}
            className="my-14 animate-delayed-view"
            alt={`Shan winning`}
          />
          <Chat stylingclasses="border-red-500 h-[7rem] mt-10 ml-10 w-[50%]">
            <Typewriter
              text={`I have Found you now Falcornia!! You will spend rest of your life in exile of the mightty empire!!`}
            />
          </Chat>
        </div>
        <div className="py-10 text-starwars">
          <h3 className="text-xl py-5">Trip Logs:</h3>
          <span className="text-starwars flex">
            <p className="text-md">Time Taken:&nbsp;</p>
            {timeTaken}
          </span>
          <span className="text-starwars flex">
            <p className="text-md">Distance Covered:&nbsp;</p>
            {distanceCovered}
          </span>
          <span className="text-starwars flex">
            <p className="text-md">Speed:&nbsp;</p>
            {speed}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FalicorniaFound;
