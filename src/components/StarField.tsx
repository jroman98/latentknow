"use client";

import { useEffect, useState } from "react";

interface Star {
  top: string;
  left: string;
  width: string;
  height: string;
  opacity: number;
  animationDelay: string;
  animationDuration: string;
}

interface StarFieldProps {
  count?: number;
  className?: string;
}

export default function StarField({ count = 20, className = "" }: StarFieldProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: count }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.4 + 0.1,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 3 + 3}s`,
    }));
    setStars(generated);
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.width,
            height: star.height,
            backgroundColor: "white",
            opacity: star.opacity,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  );
}
