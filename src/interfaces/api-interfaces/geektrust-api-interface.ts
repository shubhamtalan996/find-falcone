export interface IPlanet {
  name: string;
  distance: number;
}

export interface IVehicle {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
}

export interface IFindFalconeResponse {
  planet_name?: string;
  status: string;
}

export interface ISelectionPayload {
  planet_names: string[];
  vehicle_names: string[];
}
