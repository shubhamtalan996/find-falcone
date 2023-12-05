import React, { FC, ReactNode } from "react";

interface ChatProps {
  stylingclasses: string;
  children: ReactNode;
}

const Chat: FC<ChatProps> = ({ children, stylingclasses }) => {
  return (
    <div
      className={`flex w-100 border-2 rounded-2xl p-5 ${stylingclasses} border-green-500`}
    >
      {children}
    </div>
  );
};

export default Chat;
