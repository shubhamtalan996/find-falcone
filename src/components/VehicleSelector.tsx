"use client";

import { IVehicle } from "@/interfaces/api-interfaces/geektrust-api-interface";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

export interface IAvailableVehicles extends IVehicle {
  disabled?: boolean;
}

interface VehicleSelectorProps {
  vehicles: IAvailableVehicles[];
  vehicleSelectCallback: (name: string) => void;
  vehiclesImages: Object;
}

const VehicleSelector: FC<VehicleSelectorProps> = ({
  vehicles,
  vehicleSelectCallback,
  vehiclesImages,
}) => {
  const handleVehicleSelect =
    (name: string, disabled: boolean) => (e: React.MouseEvent<HTMLElement>) => {
      if (!disabled) {
        vehicleSelectCallback(name);
      }
    };
  return (
    <section className="py-10">
      <h3 className="text-xl from-indigo-300 bg-gradient-to-r">
        Choose vehicle to search the planet
      </h3>
      <div className="flex flex-row justify-between gap-5 flex-wrap shadow-md py-5">
        {vehicles.map(
          ({ name, disabled = false, total_no, max_distance, speed }) => (
            <div
              key={name}
              className={`rounded-md p-4 cursor-pointer flex flex-col items-center text-center ${
                disabled && "hidden"
              }`}
              onClick={handleVehicleSelect(name, disabled)}
            >
              <Image
                width={150}
                height={150}
                referrerPolicy="no-referrer"
                src={vehiclesImages[name]}
                alt={`Planet ${name}`}
              />
              <div className="text-sm pt-2">
                <p>{`Name:${name}(${total_no})`}</p>
                <p>{`Range:${max_distance}`}</p>
                <p>{`Speed:${speed}`}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default VehicleSelector;
