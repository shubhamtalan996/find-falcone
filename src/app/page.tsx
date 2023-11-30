import SelectorConsole from "@/components/SelectorConsole";
import { geekTrustApi } from "@/utils/api";
// import { spaceBackground } from "@/assets/jpeg";
import Image from "next/image";

export default async function Home() {
  const planets = (await geekTrustApi.getPlanets()) || [];
  const vehicles = (await geekTrustApi.getSpaceVehicles()) || [];

  return (
    <main
      className="min-h-screen p-5 md:p-24 "
      // style={{ backgroundImage: spaceBackground.src }}
    >
      <h1 className="text-4xl bg-gradient-to-r from-indigo-500 text-left font-extrabold">
        Find falcone...
      </h1>
      <p className="py-10 m-0 font-light text-white text-md">
        In the distant distant galaxy of Tara B. After the recent war with
        neighbouring planet Falicornia, King Shan has exiled the Queen of
        Falicornia for 15 years. Right now queen is in hiding.
      </p>
      <h2 className="pr-4 m-0 font-light text-white text-md">
        With all the assests available to king Shah find queen Falicornia..
      </h2>

      <section className="py-10">
        <SelectorConsole {...{ planets, vehicles }} />
      </section>
    </main>
  );
}
