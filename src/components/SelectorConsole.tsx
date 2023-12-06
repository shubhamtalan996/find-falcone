"use client";

import React, { FC } from "react";
import VehicleSelector from "./VehicleSelector";
import PlanetSelector from "./PlanetSelector";

import { SelectorConsoleProps } from "@/interfaces/component-interfaces/selector-console-interface";
import { planetsJson, spacecraftsJson } from "@/constants/assetsConfig";
import { useRouter } from "next/navigation";
import FalicorniaFound from "./FalicorniaFound";
import Controls from "./Controls";
import FalicorniaNotFound from "./FalicorniaNotFound";
import useSelectorConsoleHook from "@/hooks/useSelectorConsoleHook";

const SelectorConsole: FC<SelectorConsoleProps> = ({ planets, vehicles }) => {
  const router = useRouter();

  const {
    remainingPlanets,
    remainingVehicles,
    isFleetReady,
    voyageLog,
    status,
    selectedPlanet,
    handlePlanetSelect,
    vehicleSelectCallback,
    sendFleet,
    reset,
  } = useSelectorConsoleHook(vehicles, planets);

  const rebootGame = () => {
    router.push("/");
  };

  return (
    <div className="p-5 rounded-md border-1 min-h-screen">
      {!isFleetReady && (
        <PlanetSelector
          planets={remainingPlanets}
          planetsImages={planetsJson}
          planetSelectCallback={handlePlanetSelect}
        />
      )}
      {!isFleetReady && selectedPlanet && (
        <VehicleSelector
          vehicles={remainingVehicles}
          vehiclesImages={spacecraftsJson}
          vehicleSelectCallback={vehicleSelectCallback}
        />
      )}
      <div className="relative min-h-full">
        <div>
          {voyageLog && <FalicorniaFound {...{ ...voyageLog }} />}
          {status === "false" && <FalicorniaNotFound />}
        </div>

        <div className="control-panel ">
          <Controls
            {...{ sendFleet, reset, rebootGame }}
            isFleetReady={isFleetReady && status !== "success"}
            sendFleetText={`Send Fleet${status === "false" ? " Again!" : "!"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectorConsole;
