"use client";
import { useState, useEffect } from "react";

export default function useTypingText(originalText: string, delay = 50) {
  const [letterCount, setLetterCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterCount((prev) => {
        if (prev === originalText.length) {
          clearInterval(interval);
        }
        return prev + 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return originalText.slice(0, letterCount);
}
