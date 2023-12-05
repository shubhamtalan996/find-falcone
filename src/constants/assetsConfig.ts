import {
  rocket1,
  rocket2,
  rocket3,
  rocket4,
  rocket5,
} from "@/assets/spacecrafts";
import {
  destroyPlanet,
  midPlanet,
  saturn,
  jupiter,
  bluePlanet,
  greenSaturn,
} from "@/assets/planets";
import { StaticImageData } from "next/image";

export enum IVehiclesJsonEnum {
  SPACE_POD = "Space pod",
  SPACE_ROCKET = "Space rocket",
  SPACE_SHUTTLE = "Space shuttle",
  SPACE_SHIP = "Space ship",
}

export interface IVehiclesJson {
  [IVehiclesJsonEnum.SPACE_POD]: StaticImageData;
  [IVehiclesJsonEnum.SPACE_ROCKET]: StaticImageData;
  [IVehiclesJsonEnum.SPACE_SHUTTLE]: StaticImageData;
  [IVehiclesJsonEnum.SPACE_SHIP]: StaticImageData;
}

export const spacecraftsJson: IVehiclesJson = {
  [IVehiclesJsonEnum.SPACE_POD]: rocket1,
  [IVehiclesJsonEnum.SPACE_ROCKET]: rocket3,
  [IVehiclesJsonEnum.SPACE_SHUTTLE]: rocket4,
  [IVehiclesJsonEnum.SPACE_SHIP]: rocket5,
};

export enum IPlanetsJsonEnum {
  Donlon = "Donlon",
  Enchai = "Enchai",
  Jebing = "Jebing",
  Sapir = "Sapir",
  Lerbin = "Lerbin",
  Pingasor = "Pingasor",
}

export interface IPlanetsJson {
  [IPlanetsJsonEnum.Donlon]: StaticImageData;
  [IPlanetsJsonEnum.Enchai]: StaticImageData;
  [IPlanetsJsonEnum.Jebing]: StaticImageData;
  [IPlanetsJsonEnum.Lerbin]: StaticImageData;
  [IPlanetsJsonEnum.Pingasor]: StaticImageData;
  [IPlanetsJsonEnum.Sapir]: StaticImageData;
}

export const planetsJson: IPlanetsJson = {
  [IPlanetsJsonEnum.Donlon]: destroyPlanet,
  [IPlanetsJsonEnum.Enchai]: midPlanet,
  [IPlanetsJsonEnum.Jebing]: saturn,
  [IPlanetsJsonEnum.Sapir]: jupiter,
  [IPlanetsJsonEnum.Lerbin]: bluePlanet,
  [IPlanetsJsonEnum.Pingasor]: greenSaturn,
};
