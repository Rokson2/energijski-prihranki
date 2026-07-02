'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let mouseX = -200;
    let mouseY = -200;
    let currentX = -200;
    let currentY = -200;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.setProperty('--cursor-x', `${currentX}px`);
        glowRef.current.style.setProperty('--cursor-y', `${currentY}px`);
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
      style={{
        background:
          'radial-gradient(600px at var(--cursor-x, -200px) var(--cursor-y, -200px), rgba(212, 168, 67, 0.06), transparent 70%)',
      }}
      aria-hidden="true"
    />
  );
}
