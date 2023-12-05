import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import VoyageAnimation, { IVoyageAnimationProps } from "./VoyageAnimation";
import { forceVader } from "@/assets/charactors";
import Chat from "./Chat";
import Typewriter from "./Typewriter";

const FalicorniaFound: FC<IVoyageAnimationProps> = ({ ...props }) => {
  return (
    <div className="result">
      <VoyageAnimation {...{ ...props }} />
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
            delay={50}
          />
        </Chat>
      </div>
    </div>
  );
};

export default FalicorniaFound;
