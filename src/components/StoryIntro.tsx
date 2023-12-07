import React from "react";

const StoryIntro = () => {
  return (
    <>
      <div className="relative w-100 min-h-[60vh] top-[-25px] z-1"></div>
      <section
        className="star-wars flex justify-center font-semibold text-starwars text-center font-starwars h-[200px] text-[500%] leading-[150%]"
        style={{
          perspective: "450px",
        }}
      >
        <div
          className="animate-crawl-progress relative"
          style={{ transformOrigin: "50% 100%" }}
        >
          <h1 className="text-4x font-extrabold">Find falcone...</h1>
          <p className="py-10 m-0 font-light text-md">
            In the distant distant galaxy of Tara B. Story starts on the planet
            of Lengaburu. After the recent deadly war with neighbouring planet
            Falicornia, King Shan has exiled the Queen of Falicornia for 15
            years. Right now queen is in hiding.
          </p>
          <h2 className="pr-4 m-0 font-light text-md">
            With all the assests available to king Shah find queen Falicornia..
          </h2>
        </div>
      </section>
      <audio
        className="hidden"
        src={"/Star_Wars_Main_Theme_Song.mp3"}
        controls
        autoPlay
      ></audio>
    </>
  );
};

export default StoryIntro;
