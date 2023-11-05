import {
  IFindFalconeResponse,
  IPlanet,
  ISelectionPayload,
  IVehicle,
} from "@/interfaces/api-interfaces/geektrust-api-interface";

/** This can change with env */
const CORE_ENDPOINT = `https://findfalcone.geektrust.com`;

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

export const sendFleet = async (payload: ISelectionPayload) => {
  let rawTokenResponse = await fetch(`${CORE_ENDPOINT}/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });

  const { token } = await rawTokenResponse.json();
  console.log({ rawTokenResponse, token });

  if (token) {
    const requestPayload = {
      ...payload,
      token,
    };
    try {
      const response = await fetch(`${CORE_ENDPOINT}/find`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPayload),
      });

      const result = (await response.json()) as IFindFalconeResponse;
      console.log("Success:", result);
      return result;
    } catch (error) {
      console.log(`[API Error]: error while fetching vehicles ${error}`);
    }
  }
};
