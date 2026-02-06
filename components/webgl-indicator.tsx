"use client";

import { useEffect, useState } from "react";

export default function WebGLIndicator() {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setSupported(Boolean(gl));
    } catch (e) {
      setSupported(false);
    }
  }, []);

  if (supported === null) return null;

  return (
    <div style={{position: 'fixed', right: 12, top: 12, zIndex: 9999, pointerEvents: 'none'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 999, background: supported ? 'rgba(34,197,94,0.9)' : 'rgba(239,68,68,0.9)', color: '#fff', fontSize: 12, fontWeight: 600}}>
        <span style={{width:10, height:10, borderRadius:10, background: '#fff', opacity: 0.9}} />
        <span>{supported ? 'WebGL: OK' : 'WebGL: Unavailable'}</span>
      </div>
    </div>
  );
}
