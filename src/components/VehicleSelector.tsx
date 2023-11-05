"use client";

import { IVehicle } from "@/interfaces/api-interfaces/geektrust-api-interface";
import React, { FC } from "react";

export interface IAvailableVehicles extends IVehicle {
  disabled?: boolean;
}

interface VehicleSelectorProps {
  vehicles: IAvailableVehicles[];
  vehicleSelectCallback: (name: string) => void;
}

const VehicleSelector: FC<VehicleSelectorProps> = ({
  vehicles,
  vehicleSelectCallback,
}) => {
  const handleVehicleSelect =
    (name: string, disabled: boolean) => (e: React.MouseEvent<HTMLElement>) => {
      if (!disabled) {
        vehicleSelectCallback(name);
      }
    };
  return (
    <section className="py-10">
      <h3 className="text-lg">Choose vehicle to search the planet</h3>
      <div className="flex flex-row justify-between gap-5 flex-wrap shadow-md py-5">
        {vehicles.map(
          ({ name, disabled = false, total_no, max_distance, speed }) => (
            <div
              key={name}
              className={`rounded-md border-2 p-4 cursor-pointer ${
                disabled && "hidden"
              }`}
              onClick={handleVehicleSelect(name, disabled)}
            >
              <p>{`Name:${name}(${total_no})`}</p>
              <p>{`Range:${max_distance}`}</p>
              <p>{`Speed:${speed}`}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default VehicleSelector;
