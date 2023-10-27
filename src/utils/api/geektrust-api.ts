/** This can change with env */
const CORE_ENDPOINT = `https://findfalcone.geektrust.com`;

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

export const getPlanets = async (): Promise<IPlanet[]> => {
  let planets: IPlanet[] = [];
  try {
    const response = await fetch(`${CORE_ENDPOINT}/planets`);
    planets = (await response.json()) as IPlanet[];
  } catch (error) {
    console.log(`[API Error]: error while fetching planets, ${error}`);
  }
  return planets;
};

export const getSpaceVehicles = async () => {
  let vehicles: IVehicle[] = [];
  try {
    const response = await fetch(`${CORE_ENDPOINT}/vehicles`);
    vehicles = (await response.json()) as IVehicle[];
  } catch (error) {
    console.log(`[API Error]: error while fetching vehicles ${error}`);
  }
  return vehicles;
};
