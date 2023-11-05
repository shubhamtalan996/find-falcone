"use client";

import React, { FC, useState } from "react";
import VehicleSelector, { IAvailableVehicles } from "./VehicleSelector";
import PlanetSelector from "./PlanetSelector";
import { geekTrustApi } from "@/utils/api";
import useFindFalconeHook from "@/hooks/useFindFalconeHook";
import {
  IPlanet,
  ISelectionPayload,
} from "@/interfaces/api-interfaces/geektrust-api-interface";
import {
  IAvailablePlanets,
  SelectorConsoleProps,
} from "@/interfaces/component-interfaces/selector-console-interface";

const SelectorConsole: FC<SelectorConsoleProps> = ({ planets, vehicles }) => {
  const [remainingVehicles, setRemainingVehicles] =
    useState<IAvailableVehicles[]>(vehicles);
  const [remainingPlanets, setRemainingPlanets] =
    useState<IAvailablePlanets[]>(planets);
  const [selectedPlanet, setSelectedPlanet] = useState<string>();

  const {
    data: { planet_name: falconesPlanet = "", status } = {},
    loading,
    trigger,
    error,
  } = useFindFalconeHook();

  const [selectionPayload, setSelectionPayload] = useState<ISelectionPayload>({
    planet_names: [],
    vehicle_names: [],
  });

  const isFleetReady = selectionPayload?.planet_names?.length === 4;

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
      setSelectionPayload((prev) => {
        const { planet_names = [], vehicle_names = [] } = prev;
        return {
          planet_names: [...planet_names, selectedPlanet],
          vehicle_names: [...vehicle_names, vehicleName],
        };
      });
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
    trigger(selectionPayload);
  };

  return (
    <div className="p-5 rounded-md border-1">
      {!isFleetReady && (
        <PlanetSelector
          planets={remainingPlanets}
          planetSelectCallback={handlePlanetSelect}
        />
      )}
      {!isFleetReady && selectedPlanet && (
        <VehicleSelector
          vehicles={remainingVehicles}
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
      {status === "success" && falconesPlanet && (
        <p>{`Traitor Planet: ${falconesPlanet}`}</p>
      )}
    </div>
  );
};

export default SelectorConsole;
