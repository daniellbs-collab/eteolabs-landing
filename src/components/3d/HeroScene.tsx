'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';

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
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
    </mesh>
  );
}

export function HeroScene() {
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

      <OrbitingShape radius={3} speed={0.5} size={0.3} color="#00F0FF" />
      <OrbitingShape radius={3.5} speed={-0.3} size={0.2} color="#FF00E5" offset={Math.PI} />

      <Stars radius={80} depth={40} count={3000} factor={2} saturation={0} fade speed={0.3} />

      <EffectComposer>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} intensity={1} />
        <ChromaticAberration offset={[0.0005, 0.0005]} radialModulation modulationOffset={0.5} />
      </EffectComposer>
    </>
  );
}