import React, { FC } from "react";

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
      {isFleetReady && status !== "success" && (
        <button
          type="button"
          onClick={sendFleet}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {`Send Fleet${status === "false" ? " Again!" : "!"}`}
        </button>
      )}
      <button
        type="button"
        onClick={reset}
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Reset
      </button>
      <button
        type="button"
        onClick={rebootGame}
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Restart
      </button>
    </>
  );
};

export default Controls;
