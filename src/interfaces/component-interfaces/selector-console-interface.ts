import { IPlanet, IVehicle } from "../api-interfaces/geektrust-api-interface";

export interface SelectorConsoleProps {
  planets: IPlanet[];
  vehicles: IVehicle[];
}

export interface IAvailablePlanets extends IPlanet {
  disabled?: boolean;
}
