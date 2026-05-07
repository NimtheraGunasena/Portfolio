"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type SignatureLogoProps = {
  size?: number;
  withText?: boolean;
  className?: string;
};

export default function SignatureLogo({
  size = 46,
  withText = true,
  className = "",
}: SignatureLogoProps) {
  const [drawKey, setDrawKey] = useState(0);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="NG signature logo"
        className="shrink-0"
        whileHover={{ rotate: -5, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setDrawKey((current) => current + 1)}
      >
        <defs>
          <linearGradient id="sigBadge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffd7a3" />
            <stop offset="48%" stopColor="#f26b4c" />
            <stop offset="100%" stopColor="#7fd6c2" />
          </linearGradient>

          <linearGradient id="sigStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(7,16,21,0.95)" />
            <stop offset="100%" stopColor="rgba(7,16,21,0.78)" />
          </linearGradient>

          <filter id="sigGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 0.35 0"
            />
          </filter>

          <clipPath id="sigClip">
            <rect x="5" y="5" width="54" height="54" rx="18" />
          </clipPath>
        </defs>

        <rect x="5" y="5" width="54" height="54" rx="18" fill="url(#sigBadge)" />
        <rect
          x="5.75"
          y="5.75"
          width="52.5"
          height="52.5"
          rx="17.25"
          fill="transparent"
          stroke="rgba(255,255,255,0.24)"
          strokeWidth="1.5"
        />

        <g clipPath="url(#sigClip)">
          <motion.circle
            cx="18"
            cy="10"
            r="20"
            fill="rgba(255,255,255,0.18)"
            animate={{ cx: [16, 52, 16] }}
            transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        <g key={drawKey}>
          <motion.path
            d="
              M 15 43
              L 15 22
              Q 15 18 19 18
              Q 22 18 23 22
              L 27.5 34
              L 31.5 22
              Q 32.5 18 35.5 18
              Q 39.5 18 39.5 22
              L 39.5 43

              M 39.5 30
              Q 43.5 20 51.5 20
              Q 55.5 20 55.5 24
              Q 55.5 28 51.5 30
              Q 55.5 32 55.5 36
              Q 55.5 40 51.5 40
              Q 43.5 40 39.5 30
            "
            fill="none"
            stroke="url(#sigStroke)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#sigGlow)"
            initial={{ pathLength: 0, opacity: 0.92 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 1.2, ease: "easeInOut" },
              opacity: { duration: 0.3 },
            }}
          />

          <motion.circle
            cx="56"
            cy="41"
            r="1.75"
            fill="#071015"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.2 }}
          />
        </g>
      </motion.svg>

      {withText ? (
        <div className="leading-tight">
          <div className="display-font text-[1.45rem] font-semibold tracking-[-0.04em] text-white">
            Nimthera Gunasena
          </div>
          <div className="text-[0.68rem] uppercase tracking-[0.24em] text-white/48">
            Software Portfolio
          </div>
        </div>
      ) : null}
    </div>
  );
}
