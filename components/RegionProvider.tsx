"use client";

import { createContext, useContext } from "react";
import { getRegion, type RegionConfig, type RegionId } from "@/lib/regions";

const RegionContext = createContext<RegionConfig | null>(null);

export function RegionProvider({
  regionId,
  children,
}: {
  regionId: RegionId;
  children: React.ReactNode;
}) {
  return (
    <RegionContext.Provider value={getRegion(regionId)}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion(): RegionConfig {
  const region = useContext(RegionContext);
  if (!region) {
    throw new Error("useRegion must be used within RegionProvider");
  }
  return region;
}
