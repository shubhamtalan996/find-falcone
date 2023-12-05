import React, { FC } from "react";
import Image from "next/image";
import { FailedVader } from "@/assets/charactors";
import Chat from "./Chat";
import Typewriter from "./Typewriter";

const FalicorniaNotFound = () => {
  return (
    <div className="flex justify-between">
      <Image
        width={400}
        height={400}
        referrerPolicy="no-referrer"
        src={FailedVader}
        className="my-14"
        alt={`vehicle moving`}
      />
      <Chat stylingclasses="border-red-500 h-[7rem] mt-10 ml-10 w-[50%]">
        <Typewriter
          text={`Ahhh! Damn the resistance! How can the entire fleet not find a single queen! Useless scums!`}
        />
      </Chat>
    </div>
  );
};

export default FalicorniaNotFound;
