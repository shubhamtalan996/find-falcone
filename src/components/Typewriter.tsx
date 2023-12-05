"use client";
import React, { useState, useEffect, FC } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
}

const Typewriter: FC<TypewriterProps> = ({ text, delay = 20 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(
          (prevText) => prevText.slice(0, -1) + text[currentIndex] + "|"
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setCurrentText(text);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
