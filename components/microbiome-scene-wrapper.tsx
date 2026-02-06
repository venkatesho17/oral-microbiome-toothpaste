"use client";

import dynamic from "next/dynamic";

// Use a clearly visible futuristic scene by default to ensure background animation shows.
const MicrobiomeScene = dynamic(
  () => import("@/components/futuristic-scene"),
  { ssr: false }
);

export default function MicrobiomeSceneWrapper() {
  return <MicrobiomeScene />;
}
