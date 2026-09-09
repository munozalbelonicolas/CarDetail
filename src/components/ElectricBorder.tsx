import React, { useId, useRef, useEffect } from 'react';

// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

export interface ElectricBorderProps {
  children?: React.ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = '#f00d0d',
  speed = 1,
  chaos = 0.12,
  thickness = 2,
  className = '',
  style = {},
}) => {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, '');
  const filterId = `electric-filter-${rawId}`;
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);

  const borderRadius = style.borderRadius ?? 16;

  useEffect(() => {
    if (speed === 0) return;
    let animationFrameId: number;
    let startTime = performance.now();
    let lastUpdate = 0;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Throttle DOM attribute updates to ~20 FPS (every 50ms) to prevent CPU reflows
      if (currentTime - lastUpdate >= 50) {
        lastUpdate = currentTime;
        const elapsed = (currentTime - startTime) / 1000;
        if (turbulenceRef.current) {
          const baseFreqX = 0.04 + Math.sin(elapsed * 2.5 * speed) * 0.015;
          const baseFreqY = 0.04 + Math.cos(elapsed * 2.8 * speed) * 0.015;
          turbulenceRef.current.setAttribute('baseFrequency', `${baseFreqX.toFixed(4)} ${baseFreqY.toFixed(4)}`);

          const seedVal = Math.floor(elapsed * 8 * speed) % 200;
          turbulenceRef.current.setAttribute('seed', seedVal.toString());
        }
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  return (
    <div
      className={`relative group ${className}`}
      style={{
        ...style,
        borderRadius,
      }}
    >
      {/* Hidden SVG Filter Definition (numOctaves 1 for high performance) */}
      <svg
        className="absolute w-0 h-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0 }}
      >
        <defs>
          <filter
            id={filterId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.04 0.04"
              numOctaves={1}
              result="noise"
              seed="1"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={chaos * 45}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
          </filter>
        </defs>
      </svg>

      {/* Layer 1: Soft Ambient Background Glow (pure CSS GPU blur) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          borderRadius,
          border: `${thickness}px solid ${color}`,
          filter: 'blur(5px)',
          opacity: 0.35,
        }}
      />

      {/* Layer 2: Electrified Energy Arcs (SVG Filter) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          borderRadius,
          border: `${thickness}px solid ${color}`,
          filter: `url(#${filterId})`,
          opacity: 0.85,
        }}
      />

      {/* Layer 3: Sharp High-Voltage Spark Core (CSS box-shadow for speed) */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          borderRadius,
          border: `1px solid ${color}`,
          boxShadow: `0 0 4px ${color}`,
          opacity: 0.75,
        }}
      />

      {/* Layer 4: Interactive Hover Flash */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          borderRadius,
          boxShadow: `0 0 12px ${color}`,
        }}
      />

      {/* Children Wrapped Content */}
      <div className="relative z-10 w-full h-full" style={{ borderRadius }}>
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
