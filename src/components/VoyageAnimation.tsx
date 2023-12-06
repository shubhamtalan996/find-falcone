import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface IAsset {
  image: StaticImageData;
  name: string;
  alt: string;
}

export interface IVoyageAnimationProps {
  vehicle: IAsset;
  planet: IAsset;
}

const VoyageAnimation: FC<IVoyageAnimationProps> = ({ vehicle, planet }) => {
  return (
    <div className="relative w-100">
      <div className="animate-linear-progress">
        <Image
          width={80}
          height={80}
          referrerPolicy="no-referrer"
          src={vehicle.image}
          className="absolute rotate-90 my-14"
          alt={vehicle.alt}
        />
      </div>

      <div className="absolute right-0">
        <Image
          width={200}
          height={200}
          referrerPolicy="no-referrer"
          src={planet.image}
          className="rotate-90 "
          alt={planet.alt}
        />
        <p>{`Traitor Planet: ${planet.name}`}</p>
      </div>
    </div>
  );
};

export default VoyageAnimation;
