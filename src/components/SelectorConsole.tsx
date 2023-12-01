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
import { loadingSpaceship } from "@/assets/jpeg/planets";
import { planetsJson, spacecraftsJson } from "@/constants/assetsConfig";
import { FirstAppranceVader } from "@/assets/charactors";

const SelectorConsole: FC<SelectorConsoleProps> = ({ planets, vehicles }) => {
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

  return (
    <div className="p-5 rounded-md border-1">
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
      {isFleetReady && (
        <button
          type="button"
          onClick={sendFleet}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Send Fleet
        </button>
      )}
      {status === "success" && falconePlanet && (
        <div className="relative w-100">
          <div className="animate-linear-progress">
            <Image
              width={60}
              height={60}
              referrerPolicy="no-referrer"
              src={spacecraftsJson[selectionState[falconePlanet]]}
              className="absolute rotate-90 my-14"
              alt={`vehicle moving`}
            />
          </div>

          <div className="absolute right-0">
            <Image
              width={150}
              height={150}
              referrerPolicy="no-referrer"
              src={planetsJson[falconePlanet]}
              className="rotate-90 "
              alt={`Trailtor Planet`}
            />
            <p>{`Traitor Planet: ${falconePlanet}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectorConsole;
