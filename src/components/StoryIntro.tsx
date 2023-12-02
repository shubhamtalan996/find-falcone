import React, { FC } from "react";

interface StoryIntroProps {}

const StoryIntro: FC<StoryIntroProps> = ({}) => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "60vh",
          top: "-25px",
          backgroundImage: "linear-gradient(0deg, transparent, black 75%)",
          zIndex: "1",
        }}
      ></div>
      <section
        className="star-wars flex justify-center  font-semibold text-starwars text-center font-starwars"
        style={{
          perspective: "400px",
          height: "200px",
          fontSize: "500%",
          lineHeight: "150%",
          fontFamily: `'Pathway Gothic One', sans-serif`,
        }}
      >
        <div
          className="animate-crawl-progress relative"
          style={{ transformOrigin: "50% 100%" }}
        >
          <h1 className="text-4x font-extrabold">Find falcone...</h1>
          <p className="py-10 m-0 font-light text-md">
            In the distant distant galaxy of Tara B. On the planet of Lengaburu.
            After the recent war with neighbouring planet Falicornia, King Shan
            has exiled the Queen of Falicornia for 15 years. Right now queen is
            in hiding.
          </p>
          <h2 className="pr-4 m-0 font-light text-md">
            With all the assests available to king Shah find queen Falicornia..
          </h2>
        </div>
      </section>
    </div>
  );
};

export default StoryIntro;
