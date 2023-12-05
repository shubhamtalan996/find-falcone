import { BobaFettHeadshot, FirstAppranceVader } from "@/assets/charactors";
import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Typewriter from "@/components/Typewriter";
import Chat from "@/components/Chat";

const ConversationData = [
  {
    key: "shan",
    text: `In the distant distant galaxy of Tara B. On the planet of
    Lengaburu. After the recent war with neighbouring planet
    Falicornia, King Shan has exiled the Queen of Falicornia for 15
    years. Right now queen is in hiding.`,
  },
  {
    key: "fet",
    text: `In the distant distant galaxy of Tara B. On the planet of
    Lengaburu. After the recent war with neighbouring planet
    Falicornia, King Shan has exiled the Queen of Falicornia for 15
    years. Right now queen is in hiding.`,
  },
];

const ShaansConversation = () => {
  return (
    <div>
      <Navigation nextPageUrl="/finding-queen" />

      <div className="flex flex-col gap-10">
        <div className="flex w-100 p-10">
          <Image
            width={400}
            height={400}
            referrerPolicy="no-referrer"
            src={FirstAppranceVader}
            alt={`King Shan`}
          />
          <Chat stylingclasses="border-red-500 h-[10rem] mt-10 ml-10 w-[50%]">
            <Typewriter text={ConversationData[0].text} delay={50} />
          </Chat>
        </div>
        <div className="flex flex-row-reverse w-100 p-10">
          <Image
            width={150}
            height={150}
            referrerPolicy="no-referrer"
            src={BobaFettHeadshot}
            alt={`Boba Fett`}
          />
          <Chat stylingclasses="border-green-500 h-[9rem] w-[50%] mt-10 mr-10">
            <Typewriter text={ConversationData[0].text} delay={50} />
          </Chat>
        </div>
      </div>
    </div>
  );
};

export default ShaansConversation;
