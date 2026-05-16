"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { logo } from "@/assets";

interface AnimatedLogoPreloaderProps {
  duration?: number;
  onComplete?: () => void;
}

export default function Preloader({
  duration = 500,
  onComplete,
}: AnimatedLogoPreloaderProps): React.ReactElement | null {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      
      <div
        className="relative sm:w-64 w-44 h-full animate-pulse"
        style={{ animationDuration: `2000ms` }}
      >
        <Image src={logo} alt="Logo" fill priority className="object-contain" />
      </div>

    </div>
  );
}