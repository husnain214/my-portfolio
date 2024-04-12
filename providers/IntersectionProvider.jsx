"use client";

import { createContext } from "react";
import { useInView } from "react-intersection-observer";

export const IntersectionContext = createContext();

export default function IntersectionProvider({ children }) {
  const { ref: observerRef, inView: isIntersecting } = useInView({
    threshold: 0.2,
  });

  return (
    <IntersectionContext.Provider value={{ observerRef, isIntersecting }}>
      {children}
    </IntersectionContext.Provider>
  );
}
