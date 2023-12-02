import React, { FC } from "react";
import { geekTrustApi } from "@/utils/api";
import SelectorConsole from "@/components/SelectorConsole";

const FindingQueen = async ({}) => {
  const planets = (await geekTrustApi.getPlanets()) || [];
  const vehicles = (await geekTrustApi.getSpaceVehicles()) || [];
  return (
    <section className="p-5 md:p-24">
      <SelectorConsole {...{ planets, vehicles }} />
    </section>
  );
};

export default FindingQueen;
