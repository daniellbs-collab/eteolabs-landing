# 3D Scenes — React Three Fiber Reference

## Table of Contents

1. [Setup & Canvas Configuration](#setup)
2. [Hero Scenes by Product](#hero-scenes)
3. [Shared 3D Components](#shared-components)
4. [Post-Processing](#post-processing)
5. [Performance & Fallbacks](#performance)

---

## Setup

### Canvas Configuration

Every 3D scene wraps in a Canvas with these defaults:

```tsx
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Scene3D({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]} // Responsive pixel ratio
      gl={{ antialias: true, alpha: true }} // Transparent background
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
```

### Required Imports

```tsx
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Environment,
  Sphere,
  Box,
  RoundedBox,
  Text3D,
  Center,
  OrbitControls,
  Stars,
} from '@react-three/drei';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from '@react-three/postprocessing';
import * as THREE from 'three';
```

---

## Hero Scenes

### NEXUS — Package Management

A constellation of 3D package boxes floating in space, slowly rotating.
Packages have labels, some glow cyan (delivered), some glow orange (waiting).

```tsx
function NexusHeroScene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00F0FF" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#FF00E5" />

      {/* Central glowing orb */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#00F0FF"
            emissive="#00F0FF"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.9}
            distort={0.25}
            speed={2}
          />
        </Sphere>
      </Float>

      {/* Floating packages */}
      {packagePositions.map((pos, i) => (
        <Float
          key={i}
          speed={1.5 + Math.random()}
          rotationIntensity={0.3}
          floatIntensity={0.8}
          position={pos}
        >
          <PackageBox
            color={i % 3 === 0 ? '#00F0FF' : '#1F2937'}
            glowing={i % 3 === 0}
          />
        </Float>
      ))}

      {/* Orbital rings */}
      <OrbitalRing radius={3} speed={0.3} color="#00F0FF" opacity={0.1} />
      <OrbitalRing
        radius={4.5}
        speed={-0.2}
        color="#FF00E5"
        opacity={0.06}
        tilt={Math.PI / 6}
      />

      {/* Background stars */}
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
          intensity={0.8}
        />
      </EffectComposer>
    </>
  );
}

const packagePositions = [
  [-2.5, 1.5, -1],
  [2.8, 0.8, -0.5],
  [-1.5, -1.2, 0.5],
  [1.8, -1.5, -1.5],
  [-3, -0.5, -2],
  [3.2, 1.8, -1.8],
  [0.5, 2.5, -1],
  [-1, 0.5, -2.5],
];
```

### BARBER — Barbershop Management

A stylized 3D scissors or barber pole rotating, with floating calendar
cards and appointment slots.

```tsx
function BarberHeroScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight
        position={[3, 5, 5]}
        intensity={1}
        color="#00F0FF"
        angle={0.3}
      />
      <pointLight position={[-3, -2, 3]} intensity={0.5} color="#FF00E5" />

      {/* Stylized barber pole */}
      <Float speed={1.5} rotationIntensity={0.3}>
        <BarberPole />
      </Float>

      {/* Floating appointment cards */}
      {appointmentSlots.map((slot, i) => (
        <Float key={i} speed={1 + i * 0.3} position={slot.position}>
          <GlassCard3D text={slot.time} />
        </Float>
      ))}

      <EffectComposer>
        <Bloom luminanceThreshold={0.5} intensity={0.6} />
      </EffectComposer>
    </>
  );
}
```

### GUARD — Access Control

A shield or lock morphing into a digital fingerprint / face scan grid.
Geometric wireframe patterns pulsing outward.

```tsx
function GuardHeroScene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#00F0FF" />

      {/* Central shield shape */}
      <Float speed={1} floatIntensity={0.5}>
        <ShieldMesh />
      </Float>

      {/* Expanding rings (scan effect) */}
      <ScanRings />

      {/* Grid particles */}
      <GridParticles count={500} />

      <EffectComposer>
        <Bloom luminanceThreshold={0.4} intensity={1.2} />
        <ChromaticAberration offset={[0.001, 0.001]} />
      </EffectComposer>
    </>
  );
}
```

### Generic — Software Product (default)

Abstract geometric shapes (icosahedrons, torus knots) with distort material,
floating in space with ambient particles.

```tsx
function GenericHeroScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00F0FF" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#FF00E5" />

      {/* Main abstract shape */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, 1]} />
          <MeshDistortMaterial
            color="#111827"
            emissive="#00F0FF"
            emissiveIntensity={0.15}
            roughness={0.2}
            metalness={0.8}
            wireframe
            distort={0.3}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Orbiting smaller shapes */}
      <OrbitingShape radius={3} speed={0.5} size={0.3} color="#00F0FF" />
      <OrbitingShape
        radius={3.5}
        speed={-0.3}
        size={0.2}
        color="#FF00E5"
        offset={Math.PI}
      />

      {/* Background particles */}
      <Stars
        radius={80}
        depth={40}
        count={3000}
        factor={2}
        saturation={0}
        fade
        speed={0.3}
      />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
          intensity={1}
        />
      </EffectComposer>
    </>
  );
}
```

---

## Shared Components

### PackageBox

```tsx
function PackageBox({
  color = '#1F2937',
  glowing = false,
}: {
  color?: string;
  glowing?: boolean;
}) {
  return (
    <RoundedBox args={[0.6, 0.5, 0.4]} radius={0.05} smoothness={4}>
      <meshStandardMaterial
        color={color}
        emissive={glowing ? color : '#000000'}
        emissiveIntensity={glowing ? 0.4 : 0}
        roughness={0.3}
        metalness={0.6}
      />
    </RoundedBox>
  );
}
```

### OrbitalRing

```tsx
function OrbitalRing({
  radius = 3,
  speed = 0.3,
  color = '#00F0FF',
  opacity = 0.1,
  tilt = 0,
}: {
  radius?: number;
  speed?: number;
  color?: string;
  opacity?: number;
  tilt?: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}
```

### OrbitingShape

```tsx
function OrbitingShape({
  radius = 3,
  speed = 0.5,
  size = 0.3,
  color = '#00F0FF',
  offset = 0,
}: {
  radius?: number;
  speed?: number;
  size?: number;
  color?: string;
  offset?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + offset;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 2) * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}
```

### ParticleField

```tsx
function ParticleField({ count = 1000 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00F0FF"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}
```

---

## Post-Processing

### Standard Effects Stack

```tsx
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from '@react-three/postprocessing';

function PostEffects() {
  return (
    <EffectComposer>
      {/* Bloom — makes emissive materials glow */}
      <Bloom
        luminanceThreshold={0.5}
        luminanceSmoothing={0.9}
        intensity={0.8}
        mipmapBlur
      />

      {/* Chromatic Aberration — subtle RGB split for cinematic feel */}
      <ChromaticAberration
        offset={[0.0005, 0.0005]}
        radialModulation
        modulationOffset={0.5}
      />

      {/* Vignette — darkens edges for focus */}
      <Vignette offset={0.3} darkness={0.7} />
    </EffectComposer>
  );
}
```

### Use Guidelines

- **Hero scene**: Bloom (high) + ChromaticAberration (subtle)
- **Final CTA scene**: Bloom (medium) + Vignette
- **Background particles**: Bloom (low) only
- **Never stack all effects** — pick 2 max per scene for performance

---

## Performance

### Responsive Quality

```tsx
// Detect low-performance devices
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isLowPower = navigator.hardwareConcurrency <= 4;

// Adjust scene complexity
<Canvas dpr={isMobile ? [1, 1.5] : [1, 2]}>
  {isMobile ? <SimplifiedScene /> : <FullScene />}
</Canvas>;
```

### 2D Fallback

For devices that don't support WebGL or have very low GPU:

```tsx
function HeroVisual() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return (
      <div className="absolute inset-0 z-0">
        {/* CSS-only fallback: gradient background + floating CSS shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full
                      bg-cyan-primary/10 blur-[100px] animate-float"
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full
                      bg-magenta-pop/10 blur-[80px] animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <HeroScene />
      </Canvas>
    </div>
  );
}
```

### Lazy Loading 3D Scenes

```tsx
import dynamic from 'next/dynamic';

const HeroScene = dynamic(
  () => import('@/components/3d/HeroScene').then((mod) => mod.HeroScene),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-void" /> },
);
```

### Key Rules

1. Never render 3D on the server — always `ssr: false`
2. Use `Suspense` with fallback for every Canvas
3. Keep triangle count under 50k for mobile scenes
4. Use `instanced meshes` when rendering many identical objects
5. Dispose of geometries and materials in cleanup
6. Cap frame rate with `frameloop="demand"` for static scenes
