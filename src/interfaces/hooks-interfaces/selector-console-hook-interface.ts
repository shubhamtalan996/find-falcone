import { StaticImageData } from "next/image";

interface IAsset {
  image: StaticImageData;
  name: string;
  alt: string;
}

export interface IVoyageAnimationProps {
  vehicle: IAsset;
  planet: IAsset;
}

export interface ILabelValuePair {
  label: string;
  value: string;
}
export interface IFalicorniaFound extends IVoyageAnimationProps {
  tripLogs: {
    timeTaken: ILabelValuePair;
    distanceCovered: ILabelValuePair;
    speed: ILabelValuePair;
    spacecraft: ILabelValuePair;
  };
}
