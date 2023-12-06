import React, { FC } from "react";
import Button from "./Button";

interface ControlsProps {
  sendFleet: () => void;
  reset: () => void;
  rebootGame: () => void;
  isFleetReady: boolean;
  sendFleetText: string;
}

const Controls: FC<ControlsProps> = ({
  sendFleet,
  reset,
  rebootGame,
  isFleetReady,
  sendFleetText,
}) => {
  return (
    <>
      {isFleetReady && <Button onClick={sendFleet}>{sendFleetText}</Button>}
      <Button onClick={reset}>Reset</Button>
      <Button onClick={rebootGame}>Restart</Button>
    </>
  );
};

export default Controls;
