import { FirstAppranceVader } from "@/assets/charactors";
import Navigation from "@/components/Navigation";
import SelectorConsole from "@/components/SelectorConsole";
import StoryIntro from "@/components/StoryIntro";
import { geekTrustApi } from "@/utils/api";
// import { spaceBackground } from "@/assets/jpeg";

export default async function Home() {
  const planets = (await geekTrustApi.getPlanets()) || [];
  const vehicles = (await geekTrustApi.getSpaceVehicles()) || [];

  return (
    <main
      className="min-h-screen"
      // style={{ backgroundImage: spaceBackground.src }}
    >
      <Navigation nextPageUrl="/shaans-conversation" autoSkipTime={12000} />
      <StoryIntro />

      {/* <section className="p-5 md:p-24">
        <SelectorConsole {...{ planets, vehicles }} />
      </section> */}
    </main>
  );
}
