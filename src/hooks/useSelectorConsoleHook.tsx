import { IAvailableVehicles } from "@/components/VehicleSelector";
import {
  IPlanetsJsonEnum,
  IVehiclesJsonEnum,
  planetsJson,
  spacecraftsJson,
} from "@/constants/assetsConfig";
import {
  IFindFalconeResponse,
  IPlanet,
  ISelectionPayload,
  IVehicle,
} from "@/interfaces/api-interfaces/geektrust-api-interface";
import { IAvailablePlanets } from "@/interfaces/component-interfaces/selector-console-interface";
import { geekTrustApi } from "@/utils/api";
import { useState } from "react";
import useFindFalconeHook from "./useFindFalconeHook";
import { IFalicorniaFound } from "@/components/FalicorniaFound";

const useSelectorConsoleHook = (vehicles: IVehicle[], planets: IPlanet[]) => {
  const {
    data: { planet_name: falconePlanet = "", status } = {},
    trigger,
    reset: resetHook,
  } = useFindFalconeHook();

  const [remainingVehicles, setRemainingVehicles] = useState<
    IAvailableVehicles[]
  >([...vehicles]);
  const [remainingPlanets, setRemainingPlanets] =
    useState<IAvailablePlanets[]>(planets);
  const [selectedPlanet, setSelectedPlanet] = useState<string>();

  const [selectionState, setSelectionState] = useState();

  const isFleetReady =
    selectionState && Object.entries(selectionState)?.length === 4
      ? true
      : false;

  const getLabelValuePairs = (label: string, value: string) => ({
    label,
    value,
  });

  const getVoyageLog = () => {
    if (selectionState) {
      const vehicleName = selectionState[
        falconePlanet as IPlanetsJsonEnum
      ] as IVehiclesJsonEnum;
      const vehicleDetails = vehicles.find(({ name }) => name === vehicleName);
      const vehicleImage = spacecraftsJson[vehicleName];

      const planetDetails = planets.find(({ name }) => name === falconePlanet);
      const planetImage = planetsJson[falconePlanet as IPlanetsJsonEnum];

      if (planetDetails && vehicleDetails) {
        const tripLogs = {
          timeTaken: getLabelValuePairs(
            "Time Taken:",
            Number(planetDetails.distance) / Number(vehicleDetails.speed) + ""
          ),
          distanceCovered: getLabelValuePairs(
            "Distance Covered:",
            Number(planetDetails.distance) + ""
          ),

          speed: getLabelValuePairs(
            "Speed:",
            Number(vehicleDetails.speed) + ""
          ),
          spacecraft: getLabelValuePairs("Spacecraft:", vehicleName),
        };
        return {
          planet: {
            image: planetImage,
            alt: "Traitor Planet",
            name: falconePlanet,
          },
          vehicle: {
            image: vehicleImage,
            alt: "vehicle moving",
            name: vehicleDetails.name,
          },
          tripLogs,
        };
      }
    }
  };

  const voyageLog: IFalicorniaFound | undefined =
    status === "success" && falconePlanet && selectionState
      ? getVoyageLog()
      : undefined;

  const handlePlanetSelect = (planet: IPlanet) => {
    const { distance, name } = planet;
    setSelectedPlanet(name);
    setRemainingVehicles((prevRemainingVehicles) => {
      return prevRemainingVehicles.map((vehicle) => {
        const { max_distance } = vehicle;
        return {
          ...vehicle,
          disabled: max_distance < distance,
        };
      });
    });
  };

  const vehicleSelectCallback = (vehicleName: string) => {
    if (selectedPlanet) {
      setSelectionState((prev: any) => {
        let updatedSelection = prev instanceof Object ? { ...prev } : {};
        updatedSelection[selectedPlanet as IPlanetsJsonEnum] =
          vehicleName as IVehiclesJsonEnum;
        return updatedSelection;
      });
      setRemainingPlanets((prev) => {
        return prev.filter(
          ({ name: planetName }) => planetName !== selectedPlanet
        );
      });
      setRemainingVehicles((prevRemainingVehicles) => {
        const tempRemainingVehicles: IAvailableVehicles[] = [];
        prevRemainingVehicles.forEach((vehicle) => {
          const { total_no, name } = vehicle;
          if (vehicleName === name) {
            let totalRemainingVehiclesType = total_no - 1;
            if (totalRemainingVehiclesType >= 1) {
              tempRemainingVehicles.push({
                ...vehicle,
                total_no: totalRemainingVehiclesType,
              });
            }
          } else {
            tempRemainingVehicles.push(vehicle);
          }
        });
        return tempRemainingVehicles;
      });
      setSelectedPlanet(undefined);
    }
  };

  const sendFleet = () => {
    if (selectionState) {
      const selectionPayload1: ISelectionPayload = {
        planet_names: [],
        vehicle_names: [],
      };
      for (const [key, value] of Object.entries(selectionState)) {
        selectionPayload1.planet_names.push(key);
        selectionPayload1.vehicle_names.push(value as string);
      }
      trigger(selectionPayload1);
    }
  };

  const reset = () => {
    resetHook();
    setRemainingVehicles([...vehicles]);
    setRemainingPlanets([...planets]);
    setSelectionState(undefined);
  };

  return {
    handlePlanetSelect,
    vehicleSelectCallback,
    sendFleet,
    reset,
    remainingPlanets,
    remainingVehicles,
    selectedPlanet,
    isFleetReady,
    status,
    voyageLog,
  };
};

export default useSelectorConsoleHook;
