"use client";
import { IPlanet, IVehicle } from "@/utils/api/geektrust-api";
import React, { FC } from "react";
import { IAvailablePlanets } from "./SelectorConsole";

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
  const handlePlanetSelect = (planet: IPlanet) => (e) => {
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
