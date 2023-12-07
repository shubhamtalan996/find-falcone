import { rocket1, rocket3, rocket4, rocket5 } from "@/assets/spacecrafts";
import {
  destroyPlanet,
  midPlanet,
  saturn,
  jupiter,
  bluePlanet,
  greenSaturn,
} from "@/assets/planets";
import {
  IPlanetsJson,
  IPlanetsJsonEnum,
  IVehiclesJson,
  IVehiclesJsonEnum,
} from "@/interfaces/config-interfaces";

export const spacecraftsJson: IVehiclesJson = {
  [IVehiclesJsonEnum.SPACE_POD]: rocket1,
  [IVehiclesJsonEnum.SPACE_ROCKET]: rocket3,
  [IVehiclesJsonEnum.SPACE_SHUTTLE]: rocket4,
  [IVehiclesJsonEnum.SPACE_SHIP]: rocket5,
};

export const planetsJson: IPlanetsJson = {
  [IPlanetsJsonEnum.Donlon]: destroyPlanet,
  [IPlanetsJsonEnum.Enchai]: midPlanet,
  [IPlanetsJsonEnum.Jebing]: saturn,
  [IPlanetsJsonEnum.Sapir]: jupiter,
  [IPlanetsJsonEnum.Lerbin]: bluePlanet,
  [IPlanetsJsonEnum.Pingasor]: greenSaturn,
};
