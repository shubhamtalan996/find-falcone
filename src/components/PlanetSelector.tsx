"use client";
import {
  IPlanet,
  IVehicle,
} from "@/interfaces/api-interfaces/geektrust-api-interface";
import { IAvailablePlanets } from "@/interfaces/component-interfaces/selector-console-interface";
import React, { FC } from "react";
import { destroyPlanet, midPlanet, saturn } from "@/assets/jpeg";
import Image from "next/image";

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
  const planetImages = [destroyPlanet, midPlanet, saturn];
  const handlePlanetSelect =
    (planet: IPlanet) => (e: React.MouseEvent<HTMLElement>) => {
      planetSelectCallback(planet);
    };
  return (
    <div className="py-10">
      <h3 className="text-lg">Choose Planet to search</h3>
      <div className="flex flex-row justify-between gap-5 flex-wrap shadow-md py-5">
        {planets.map((planet, index) => {
          const { name, distance, disabled } = planet;
          return (
            <div
              key={name}
              onClick={handlePlanetSelect(planet)}
              className={`rounded-md border-2 p-4 cursor-pointer text-center ${
                disabled && "hidden"
              }`}
            >
              <Image
                width={150}
                height={150}
                referrerPolicy="no-referrer"
                src={planetImages[index ? index % 3 : index]}
                alt={`Planet ${name}`}
              />
              <div>
                <p>Name:{name}</p>
                <p>Distance:{distance}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetSelector;
