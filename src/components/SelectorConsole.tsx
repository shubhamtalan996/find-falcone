"use client";

import React, { FC, useState } from "react";
import VehicleSelector, { IAvailableVehicles } from "./VehicleSelector";
import PlanetSelector from "./PlanetSelector";
import useFindFalconeHook from "@/hooks/useFindFalconeHook";
import {
  IPlanet,
  ISelectionPayload,
} from "@/interfaces/api-interfaces/geektrust-api-interface";
import {
  IAvailablePlanets,
  SelectorConsoleProps,
} from "@/interfaces/component-interfaces/selector-console-interface";
import Image from "next/image";
import { planetsJson, spacecraftsJson } from "@/constants/assetsConfig";
import {
  FailedVader,
  FirstAppranceVader,
  forceVader,
} from "@/assets/charactors";
import { useRouter } from "next/navigation";
import VoyageAnimation from "./VoyageAnimation";
import FalicorniaFound from "./FalicorniaFound";
import Controls from "./Controls";
import FalicorniaNotFound from "./FalicorniaNotFound";

const SelectorConsole: FC<SelectorConsoleProps> = ({ planets, vehicles }) => {
  const router = useRouter();
  const [remainingVehicles, setRemainingVehicles] = useState<
    IAvailableVehicles[]
  >([...vehicles]);
  const [remainingPlanets, setRemainingPlanets] =
    useState<IAvailablePlanets[]>(planets);
  const [selectedPlanet, setSelectedPlanet] = useState<string>();

  const {
    data: { planet_name: falconePlanet = "", status } = {},
    loading,
    trigger,
    error,
    reset: resetHook,
  } = useFindFalconeHook();

  const [selectionState, setSelectionState] = useState({});

  const isFleetReady = Object.entries(selectionState)?.length === 4;

  const handlePlanetSelect = (planet: IPlanet) => {
    const { distance, name } = planet;
    setSelectedPlanet(name);
    setRemainingVehicles((prevRemainingVehicles) => {
      return prevRemainingVehicles.map((vehicle) => {
        const { max_distance } = vehicle;
        return {
          ...vehicle,
          disabled: max_distance < distance,
        };
      });
    });
  };

  const vehicleSelectCallback = (vehicleName: string) => {
    if (selectedPlanet) {
      setSelectionState((prev) => ({
        ...prev,
        [selectedPlanet]: vehicleName,
      }));
      setRemainingPlanets((prev) => {
        return prev.filter(
          ({ name: planetName }) => planetName !== selectedPlanet
        );
      });
      setRemainingVehicles((prevRemainingVehicles) => {
        const tempRemainingVehicles: IAvailableVehicles[] = [];
        prevRemainingVehicles.forEach((vehicle) => {
          const { total_no, name } = vehicle;
          if (vehicleName === name) {
            let totalRemainingVehiclesType = total_no - 1;
            if (totalRemainingVehiclesType >= 1) {
              tempRemainingVehicles.push({
                ...vehicle,
                total_no: totalRemainingVehiclesType,
              });
            }
          } else {
            tempRemainingVehicles.push(vehicle);
          }
        });
        return tempRemainingVehicles;
      });
      setSelectedPlanet(undefined);
    }
  };

  const sendFleet = () => {
    const selectionPayload1: ISelectionPayload = {
      planet_names: [],
      vehicle_names: [],
    };
    for (const [key, value] of Object.entries(selectionState)) {
      selectionPayload1.planet_names.push(key);
      selectionPayload1.vehicle_names.push(value as string);
    }
    trigger(selectionPayload1);
  };

  const reset = () => {
    resetHook();
    setRemainingVehicles([...vehicles]);
    setRemainingPlanets([...planets]);
    setSelectionState({});
  };

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
          {status === "success" && falconePlanet && (
            <FalicorniaFound
              planet={{
                image: planetsJson[falconePlanet],
                alt: "Traitor Planet",
                name: falconePlanet,
              }}
              vehicle={{
                image: spacecraftsJson[selectionState[falconePlanet]],
                alt: "vehicle moving",
                name: "",
              }}
              tripLogs={{
                timeTaken: 4,
                distanceCovered: 200,
                speed: 50,
              }}
            />
          )}
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
