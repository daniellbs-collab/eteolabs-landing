'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, Edges, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// A glowing holographic card representing a business vertical
function HolographicCard({
  position,
  rotation,
  color,
  title,
  floatSpeed = 1.5,
  floatIntensity = 0.5
}: {
  position: [number, number, number],
  rotation: [number, number, number],
  color: string,
  title: string,
  floatSpeed?: number,
  floatIntensity?: number
}) {
  const cardRef = useRef<THREE.Group>(null);
  const colorObj = useMemo(() => new THREE.Color(color), [color]);

  return (
    <Float rotationIntensity={0.2} floatIntensity={floatIntensity} speed={floatSpeed}>
      <group position={position} rotation={rotation} ref={cardRef}>
        <mesh>
          <boxGeometry args={[1.2, 1.6, 0.05]} />
          <meshBasicMaterial color="#0A0F15" transparent opacity={0.6} />
          <Edges
            scale={1.0}
            threshold={15}
            color={colorObj}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Abstract data lines inside the card */}
        <mesh position={[0, -0.4, 0.03]}>
          <planeGeometry args={[0.8, 0.01]} />
          <meshBasicMaterial color={colorObj} transparent opacity={0.15} toneMapped={false} />
        </mesh>
        <mesh position={[-0.2, -0.5, 0.03]}>
          <planeGeometry args={[0.4, 0.01]} />
          <meshBasicMaterial color={colorObj} transparent opacity={0.1} toneMapped={false} />
        </mesh>

        {/* CSS-based label with border-radius and padding */}
        <group position={[0, 0, 0.04]}>
          <Html center transform distanceFactor={2.5}>
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(0, 229, 255, 0.3)',
                padding: '4px 12px',
                borderRadius: '4px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                userSelect: 'none'
              }}
            >
              {title}
            </div>
          </Html>
        </group>
      </group>
    </Float>
  );
}

// Data nodes orbiting
function DataNode({ radius, angle, speed, color, height }: { radius: number, angle: number, speed: number, color: string, height: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const baseY = height;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 2 + angle) * 0.2;
    ref.current.rotation.x = state.clock.elapsedTime;
    ref.current.rotation.y = state.clock.elapsedTime * 1.5;
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.08, 0]} />
      <meshBasicMaterial color={new THREE.Color(color).multiplyScalar(2)} toneMapped={false} />
    </mesh>
  );
}

export function HeroScene() {
  const coreGroup = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreGroup.current) {
      coreGroup.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.08;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <>
      <group position={[0, 0, 0]} ref={coreGroup}>
        {/* Core Element */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh>
            <icosahedronGeometry args={[0.8, 1]} />
            <meshBasicMaterial color="#0A1520" wireframe transparent opacity={0.3} />
            <Edges scale={1.05} threshold={15} color="#00F0FF" />
          </mesh>
        </Float>

        {/* Outer Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[3.5, 0.002, 16, 100]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.25} toneMapped={false} />
        </mesh>

        <HolographicCard
          position={[-2.8, 0.5, -1]}
          rotation={[0.1, 0.6, -0.1]}
          color="#00F0FF"
          title="DASHBOARDS"
          floatSpeed={1.5}
        />
        <HolographicCard
          position={[2.8, -0.2, -0.5]}
          rotation={[-0.1, -0.5, 0.1]}
          color="#E2EEE8"
          title="CLINICS & HEALTH"
          floatSpeed={1.8}
        />
        <HolographicCard
          position={[-1.2, -1.8, -1.5]}
          rotation={[-0.3, 0.2, -0.2]}
          color="#E2EEE8"
          title="ECOMMERCE"
          floatSpeed={2.2}
          floatIntensity={0.8}
        />
        <HolographicCard
          position={[1.5, 1.8, -2.0]}
          rotation={[0.3, -0.4, 0.2]}
          color="#00F0FF"
          title="BARBER OS"
          floatSpeed={1.2}
        />

        {/* Orbiting Nodes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <DataNode
            key={i}
            radius={2 + Math.random() * 2}
            angle={(i / 12) * Math.PI * 2}
            speed={0.1 + Math.random() * 0.2}
            color={i % 3 === 0 ? "#00F0FF" : "#E2EEE8"}
            height={(Math.random() - 0.5) * 3}
          />
        ))}
      </group>

      <Stars radius={100} depth={50} count={1500} factor={2} saturation={1} fade speed={1} />

      <EffectComposer multisampling={4}>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
      </EffectComposer>
    </>
  );
}
