"use client";
import { BobaFettHeadshot, FirstAppranceVader } from "@/assets/charactors";
import React, { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Typewriter from "@/components/Typewriter";
import Chat from "@/components/Chat";
import Button from "@/components/Button";
import ShanFetConversation from "@/constants/conversations";
import { useRouter } from "next/navigation";

const ShaansConversation = () => {
  const [chatText, setChatText] = useState({
    shan: ShanFetConversation[0].text,
    fet: "",
    timelineIndex: 0,
  });
  const router = useRouter();

  const { shan: shanDialogue, fet: fetDialogue, timelineIndex } = chatText;

  const updateChat = (updateBy: number) => {
    setChatText((prev) => {
      const dialogue = ShanFetConversation[prev.timelineIndex + updateBy];
      return {
        ...prev,
        [dialogue.key]: dialogue.text,
        [dialogue.key === "shan" ? "fet" : "shan"]: "",
        timelineIndex: prev.timelineIndex + updateBy,
      };
    });
  };

  const navigateToNextPage = () => {
    router.push("/finding-queen");
  };

  return (
    <div>
      <Navigation nextPageUrl="/finding-queen" />
      <div className="flex flex-col gap-10">
        <div className="flex w-100 p-10">
          <Image
            width={500}
            height={500}
            referrerPolicy="no-referrer"
            src={FirstAppranceVader}
            alt={`King Shan`}
          />
          {shanDialogue && (
            <Chat stylingclasses="border-red-500 h-[10rem] mt-10 w-[50%]">
              <Typewriter
                text={shanDialogue}
                className="tracking-[3px] font-medium text-base"
              />
            </Chat>
          )}
        </div>
        <div className="flex flex-row-reverse w-100 p-10">
          <Image
            width={200}
            height={200}
            referrerPolicy="no-referrer"
            src={BobaFettHeadshot}
            alt={`Boba Fett`}
          />
          {fetDialogue && (
            <Chat stylingclasses="border-green-500 h-[9rem] w-[50%] mt-10 mr-10">
              <Typewriter
                text={fetDialogue}
                className="tracking-[3px] font-medium text-base"
              />
            </Chat>
          )}
        </div>
      </div>
      <div className="flex justify-center py-10">
        {timelineIndex > 0 && (
          <Button onClick={(e) => updateChat(-1)}>{"<Previous"}</Button>
        )}

        {timelineIndex < ShanFetConversation.length - 1 && (
          <Button onClick={(e) => updateChat(1)}>{"Next>"}</Button>
        )}
        {timelineIndex === ShanFetConversation.length - 1 && (
          <Button onClick={navigateToNextPage}>{"Next Page"}</Button>
        )}
      </div>
    </div>
  );
};

export default ShaansConversation;
