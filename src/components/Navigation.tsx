"use client";

import React, { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

interface NavigationProps {
  nextPageUrl: string;
  autoSkipTime?: number;
}

const Navigation: FC<NavigationProps> = ({ nextPageUrl, autoSkipTime }) => {
  const router = useRouter();

  const navigate = () => {
    router.push(nextPageUrl);
  };

  useEffect(() => {
    if (autoSkipTime) {
      const animationTimer = setTimeout(() => {
        navigate();
      }, autoSkipTime);
      return () => {
        clearTimeout(animationTimer);
      };
    }
  }, [autoSkipTime]);
  return (
    <div>
      <button
        type="button"
        onClick={navigate}
        className="p-5 animate-pulse z-10 text-starwars hover:bg-gradient-to-bl font-xs text-lg tracking-widest text-center absolute right-0"
      >
        Skip
      </button>
    </div>
  );
};

export default Navigation;
