'use client';

import { Canvas, type CanvasProps } from '@react-three/fiber';
import { ReactNode, Suspense } from 'react';
import { cn } from '@/lib/utils';

interface Scene3DProps extends Omit<CanvasProps, 'children' | 'className'> {
  children: ReactNode;
  className?: string;
}

export function Scene3D({ children, className, ...props }: Scene3DProps) {
  return (
    <div className={cn('pointer-events-none', className)}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.2]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        performance={{ min: 0.5, debounce: 180 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        {...props}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
