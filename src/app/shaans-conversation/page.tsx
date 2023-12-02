import { FirstAppranceVader } from "@/assets/charactors";
import React, { FC } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";

const ShaansConversation = () => {
  return (
    <div>
      <Navigation nextPageUrl="/finding-queen" />

      <div className="flex flex-col gap-10">
        <div className="flex w-100 p-10">
          <Image
            width={300}
            height={300}
            referrerPolicy="no-referrer"
            src={FirstAppranceVader}
            alt={`King Shaan`}
          />
          <div className="mt-10 ml-10 w-[50%]">
            <div className="border-2 rounded border-red-500 p-5">
              In the distant distant galaxy of Tara B. On the planet of
              Lengaburu. After the recent war with neighbouring planet
              Falicornia, King Shan has exiled the Queen of Falicornia for 15
              years. Right now queen is in hiding.
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse w-100 p-10">
          <Image
            width={300}
            height={300}
            referrerPolicy="no-referrer"
            src={FirstAppranceVader}
            alt={`King Shaan`}
          />
          <div className="mt-10 mr-10 w-[50%]">
            <div className="border-2 rounded border-red-500 p-5">
              In the distant distant galaxy of Tara B. On the planet of
              Lengaburu. After the recent war with neighbouring planet
              Falicornia, King Shan has exiled the Queen of Falicornia for 15
              years. Right now queen is in hiding.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShaansConversation;
