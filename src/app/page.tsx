import Navigation from "@/components/Navigation";
import StoryIntro from "@/components/StoryIntro";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Navigation nextPageUrl="/shaans-conversation" autoSkipTime={20000} />
      <StoryIntro />
    </main>
  );
}
