import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

function SpinningTorus() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.6;
  });
  return (
    <mesh ref={ref} rotation={[0.4, 0, 0]}>
      <torusKnotGeometry args={[0.9, 0.25, 140, 32]} />
      <meshStandardMaterial color="#00f7ff" metalness={0.7} roughness={0.1} emissive="#002b3b" emissiveIntensity={0.6} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <SpinningTorus />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Environment preset="night" />
    </Canvas>
  );
}
