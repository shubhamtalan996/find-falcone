"use client";
import {
  IPlanet,
  IVehicle,
} from "@/interfaces/api-interfaces/geektrust-api-interface";
import { IAvailablePlanets } from "@/interfaces/component-interfaces/selector-console-interface";
import React, { FC } from "react";

export interface IAvailableVehicles extends IVehicle {
  disabled?: boolean;
}

interface IPlanetsSelectorProps {
  planets: IAvailablePlanets[];
  planetSelectCallback: (planet: IPlanet) => void;
}

const PlanetSelector: FC<IPlanetsSelectorProps> = ({
  planets,
  planetSelectCallback,
}) => {
  const handlePlanetSelect =
    (planet: IPlanet) => (e: React.MouseEvent<HTMLElement>) => {
      planetSelectCallback(planet);
    };
  return (
    <div className="py-10">
      <h3 className="text-lg">Choose Planet to search</h3>
      <div className="flex flex-row justify-between gap-5 flex-wrap shadow-md py-5">
        {planets.map((planet) => {
          const { name, distance, disabled } = planet;
          return (
            <div
              key={name}
              className={`rounded-md border-2 p-4 cursor-pointer ${
                disabled && "hidden"
              }`}
              onClick={handlePlanetSelect(planet)}
            >
              <p>Name:{name}</p>
              <p>Distance:{distance}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetSelector;
