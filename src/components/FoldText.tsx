import React, { useMemo } from 'react';
import { motion, type Transition } from 'framer-motion';

export interface FoldTextProps {
  text: string;
  splitBy?: 'char' | 'word';
  hinge?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'mount' | 'inView' | 'hover';
  duration?: number;
  stagger?: number;
  ease?: string | number[];
  perspective?: number;
  creaseShading?: number;
  fontSize?: number | string;
  fontWeight?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FoldText: React.FC<FoldTextProps> = ({
  text,
  splitBy = 'char',
  hinge = 'top',
  trigger = 'mount',
  duration = 0.65,
  stagger = 0.045,
  ease = [0.215, 0.61, 0.355, 1],
  perspective = 700,
  creaseShading = 0.55,
  fontSize,
  fontWeight,
  color = '#e11d2a',
  className = '',
  style = {},
}) => {
  const units = useMemo(() => {
    if (splitBy === 'char') {
      return text.split('').map((char) => (char === ' ' ? '\u00A0' : char));
    }
    return text.split(' ');
  }, [text, splitBy]);

  // Determine transform origin and initial rotation based on hinge
  const { transformOrigin, initialRotate, rotateProp, shadingGradient } = useMemo(() => {
    switch (hinge) {
      case 'bottom':
        return {
          transformOrigin: 'bottom center',
          initialRotate: 85,
          rotateProp: 'rotateX' as const,
          shadingGradient: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
        };
      case 'left':
        return {
          transformOrigin: 'left center',
          initialRotate: -85,
          rotateProp: 'rotateY' as const,
          shadingGradient: 'linear-gradient(to right, rgba(0,0,0,0.85), transparent)',
        };
      case 'right':
        return {
          transformOrigin: 'right center',
          initialRotate: 85,
          rotateProp: 'rotateY' as const,
          shadingGradient: 'linear-gradient(to left, rgba(0,0,0,0.85), transparent)',
        };
      case 'top':
      default:
        return {
          transformOrigin: 'top center',
          initialRotate: -85,
          rotateProp: 'rotateX' as const,
          shadingGradient: 'linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)',
        };
    }
  }, [hinge]);

  const cubicEase: [number, number, number, number] = [0.215, 0.61, 0.355, 1];
  const isX = rotateProp === 'rotateX';

  const animationProps = trigger === 'inView'
    ? {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.2 },
      }
    : {
        initial: 'hidden' as const,
        animate: 'visible' as const,
      };

  const charVariants = {
    hidden: {
      rotateX: isX ? initialRotate : 0,
      rotateY: !isX ? initialRotate : 0,
      opacity: 0,
    },
    visible: {
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
    },
  };

  return (
    <span
      className={`inline-flex flex-wrap items-baseline ${className}`}
      style={{
        perspective: `${perspective}px`,
        fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
        fontWeight,
        color,
        ...style,
      }}
    >
      {units.map((unit, index) => {
        const delay = index * stagger;

        return (
          <span
            key={index}
            className="relative inline-block overflow-visible"
            style={{
              perspective: `${perspective}px`,
              transformStyle: 'preserve-3d',
              whiteSpace: 'pre',
            }}
          >
            <motion.span
              {...animationProps}
              variants={charVariants}
              transition={{
                duration,
                ease: cubicEase,
                delay,
              }}
              style={{
                display: 'inline-block',
                transformOrigin,
                willChange: 'transform, opacity',
                color,
              }}
            >
              {unit}
              {splitBy === 'word' && index < units.length - 1 && '\u00A0'}

              {/* Crease shading overlay */}
              {creaseShading > 0 && (
                <motion.span
                  {...animationProps}
                  variants={{
                    hidden: { opacity: creaseShading },
                    visible: { opacity: 0 },
                  }}
                  transition={{
                    duration,
                    ease: cubicEase,
                    delay,
                  }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: shadingGradient,
                    transformOrigin,
                    borderRadius: '2px',
                  }}
                  aria-hidden="true"
                />
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};

export default FoldText;
