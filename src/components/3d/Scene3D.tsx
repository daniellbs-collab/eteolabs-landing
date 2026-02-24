'use client';

import { Canvas, type CanvasProps } from '@react-three/fiber';
import { ReactNode, Suspense } from 'react';

interface Scene3DProps extends Omit<CanvasProps, 'children' | 'className'> {
  children: ReactNode;
  className?: string;
}

export function Scene3D({ children, className, ...props }: Scene3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', pointerEvents: 'none' }}
      className={className}
      {...props}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}