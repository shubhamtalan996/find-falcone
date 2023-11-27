import {
  IFindFalconeResponse,
  ISelectionPayload,
} from "@/interfaces/api-interfaces/geektrust-api-interface";
import { geekTrustApi } from "@/utils/api";
import { useState } from "react";

const ANIMATION_LOADING_TIME: number = 3000;

const useFindFalconeHook = () => {
  const [data, setData] = useState<IFindFalconeResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState();

  const trigger = (requestData: ISelectionPayload) => {
    if (requestData) {
      setLoading(true);
      setData(undefined);
      setError(undefined);
      setTimeout(() => {
        geekTrustApi
          .sendFleet(requestData)
          .then((res) => setData(res))
          .catch((err) => setError(err))
          .finally(() => {
            setLoading(false);
          });
      }, [ANIMATION_LOADING_TIME]);
    }
  };

  return { data, loading, trigger, error };
};

export default useFindFalconeHook;
