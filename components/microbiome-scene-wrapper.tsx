"use client";

import dynamic from "next/dynamic";

const MicrobiomeScene = dynamic(
  () => import("@/components/microbiome-scene"),
  { ssr: false }
);

export default function MicrobiomeSceneWrapper() {
  return <MicrobiomeScene />;
}
