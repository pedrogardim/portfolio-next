import { useState, useEffect } from "react";

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type Breakpoint = keyof typeof BREAKPOINTS;
type NullableBreakpoint = Breakpoint | null;

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<NullableBreakpoint>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      let currentBreakpoint: NullableBreakpoint = null;
      Object.keys(BREAKPOINTS)
        .reverse()
        .forEach((key) => {
          if (window.innerWidth < BREAKPOINTS[key as Breakpoint]) {
            currentBreakpoint = key as Breakpoint;
          }
        });
      setBreakpoint(currentBreakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint && (breakpoint === "sm" || breakpoint === "md"),
  };
}
