"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
