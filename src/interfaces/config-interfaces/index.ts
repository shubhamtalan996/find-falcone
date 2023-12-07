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

export interface IDialogue {
  key: "shan" | "fet";
  text: string;
}
