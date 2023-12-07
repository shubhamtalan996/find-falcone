import React, { FC } from "react";
import Image from "next/image";
import VoyageAnimation from "./VoyageAnimation";
import { forceVader } from "@/assets/charactors";
import Chat from "./Chat";
import Typewriter from "./Typewriter";
import { IFalicorniaFound } from "@/interfaces/hooks-interfaces/selector-console-hook-interface";
import { ShansVictoryDialogue } from "@/config/dialogues";

const FalicorniaFound: FC<IFalicorniaFound> = ({ tripLogs, ...props }) => {
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
          <Chat stylingclasses="border-red-500 h-[9rem] mt-10 ml-10 w-[50%]">
            <Typewriter
              text={ShansVictoryDialogue}
              className="tracking-[3px] font-medium text-base"
            />
          </Chat>
        </div>
        <div className="py-10 text-starwars">
          <h3 className="text-xl py-5">Trip Logs:</h3>

          {Object.entries(tripLogs).map(([key, { label, value }]) => (
            <span className="text-starwars flex" key={key}>
              <p className="text-md">{label}&nbsp;</p>
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FalicorniaFound;
