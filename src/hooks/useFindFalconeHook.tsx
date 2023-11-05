import {
  IFindFalconeResponse,
  ISelectionPayload,
} from "@/interfaces/api-interfaces/geektrust-api-interface";
import { geekTrustApi } from "@/utils/api";
import { useState } from "react";

const useFindFalconeHook = () => {
  const [data, setData] = useState<IFindFalconeResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState();

  const trigger = (requestData: ISelectionPayload) => {
    if (requestData) {
      setLoading(true);
      setData(undefined);
      setError(undefined);
      geekTrustApi
        .sendFleet(requestData)
        .then((res) => setData(res))
        .catch((err) => setError(err))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return { data, loading, trigger, error };
};

export default useFindFalconeHook;
