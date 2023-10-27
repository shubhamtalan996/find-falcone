"use client";
import { IPlanet, IVehicle } from "@/utils/api/geektrust-api";
import React, { FC, useState } from "react";
import VehicleSelector, { IAvailableVehicles } from "./VehicleSelector";
import PlanetSelector from "./PlanetSelector";

interface SelectorConsoleProps {
  planets: IPlanet[];
  vehicles: IVehicle[];
}

interface ISelectionPayload {
  planet_names: string[];
  vehicle_names: string[];
}

export interface IAvailablePlanets extends IPlanet {
  disabled?: boolean;
}

const SelectorConsole: FC<SelectorConsoleProps> = ({ planets, vehicles }) => {
  const [remainingVehicles, setRemainingVehicles] =
    useState<IAvailableVehicles[]>(vehicles);
  const [remainingPlanets, setRemainingPlanets] =
    useState<IAvailablePlanets[]>(planets);
  const [selectedPlanet, setSelectedPlanet] = useState<string>();

  const [selectionPayload, setSelectionPayload] = useState<ISelectionPayload>({
    planet_names: [],
    vehicle_names: [],
  });

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

  console.log({ selectionPayload });

  const vehicleSelectCallback = (vehicleName: string) => {
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
    setSelectedPlanet(undefined);
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
  };

  return (
    <div className="p-5 rounded-md border-1">
      {/* <div className="py-10">
        <h3 className="text-lg">Choose Planet to search</h3>
        <div className="flex flex-row justify-between gap-5 flex-wrap shadow-md py-5">
          {planets.map(({ name, distance }) => (
            <div
              key={name}
              className="rounded-md border-2 p-4 cursor-pointer"
              onClick={handlePlanetSelect({ name, distance })}
            >
              <p>Name:{name}</p>
              <p>Distance:{distance}</p>
            </div>
          ))}
        </div>
      </div> */}
      <PlanetSelector
        planets={remainingPlanets}
        planetSelectCallback={handlePlanetSelect}
      />
      <VehicleSelector
        vehicles={remainingVehicles}
        vehicleSelectCallback={vehicleSelectCallback}
      />
    </div>
  );
};

export default SelectorConsole;
