"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// Cute floating robot inspired by vector mascot (stylized, low-poly, lightweight)
function CuteRobot() {
  const group = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);

  // Idle float + subtle head scan
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      // Lower baseline and smaller bob so head never hits the canvas top
      group.current.position.y = -0.08 + Math.sin(t * 1.1) * 0.04;
      group.current.rotation.y = Math.sin(t * 0.6) * 0.15;
    }
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 1.2) * 0.35;
      head.current.rotation.x = Math.cos(t * 1.0) * 0.05;
    }
  });

  // Materials
  const whiteGloss = new THREE.MeshPhysicalMaterial({
    color: "#e8ecf1",
    roughness: 0.25,
    metalness: 0.15,
    clearcoat: 1,
    clearcoatRoughness: 0.15,
  });
  const darkFace = new THREE.MeshStandardMaterial({
    color: "#0b1220",
    metalness: 0.6,
    roughness: 0.2,
    emissive: new THREE.Color("#0c1a2b"),
    emissiveIntensity: 0.4,
  });
  const eyeGlow = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#7ee7ff"),
    emissive: new THREE.Color("#46c7f5"),
    emissiveIntensity: 1.4,
    metalness: 0.1,
    roughness: 0.3,
  });

  return (
    <group ref={group} position={[0, 0.1, 0]}>
      {/* Body (rounded capsule-like) */}
      <group position={[0, 0.1, 0]}>
        <mesh material={whiteGloss} castShadow receiveShadow>
          {/* Capsule: radius 0.45, height 0.7 */}
          <capsuleGeometry args={[0.45, 0.7, 8, 16]} />
        </mesh>
      </group>

      {/* Head */}
      <group ref={head} position={[0, 0.95, 0]}>
        {/* Rounded head base */}
        <RoundedBox args={[0.9, 0.6, 0.6]} radius={0.25} smoothness={8}>
          <meshPhysicalMaterial {...whiteGloss} />
        </RoundedBox>

        {/* Face visor */}
        <RoundedBox args={[0.72, 0.32, 0.08]} radius={0.1} smoothness={6} position={[0, 0.02, 0.34]}>
          <meshStandardMaterial {...(darkFace as any)} />
        </RoundedBox>

        {/* Eyes */}
        <RoundedBox args={[0.12, 0.08, 0.03]} radius={0.04} smoothness={4} position={[-0.18, 0.05, 0.38]}>
          <meshStandardMaterial {...(eyeGlow as any)} />
        </RoundedBox>
        <RoundedBox args={[0.12, 0.08, 0.03]} radius={0.04} smoothness={4} position={[0.18, 0.05, 0.38]}>
          <meshStandardMaterial {...(eyeGlow as any)} />
        </RoundedBox>
        {/* Mouth (simple gentle smile hint) */}
        <RoundedBox args={[0.14, 0.02, 0.02]} radius={0.01} smoothness={3} position={[0, -0.06, 0.39]}>
          <meshStandardMaterial color="#5ad2ff" emissive="#49b6e6" emissiveIntensity={0.8} />
        </RoundedBox>
      </group>

      {/* Arms */}
      <group position={[-0.62, 0.45, 0]} rotation={[0, 0, 0.1]}>
        <RoundedBox args={[0.16, 0.16, 0.16]} radius={0.06}>
          <meshPhysicalMaterial {...whiteGloss} />
        </RoundedBox>
        <mesh position={[0, -0.28, 0]}>
          <capsuleGeometry args={[0.085, 0.36, 8, 16]} />
          <meshPhysicalMaterial {...whiteGloss} />
        </mesh>
      </group>
      <group position={[0.62, 0.45, 0]} rotation={[0, 0, -0.1]}>
        <RoundedBox args={[0.16, 0.16, 0.16]} radius={0.06}>
          <meshPhysicalMaterial {...whiteGloss} />
        </RoundedBox>
        <mesh position={[0, -0.28, 0]}>
          <capsuleGeometry args={[0.085, 0.36, 8, 16]} />
          <meshPhysicalMaterial {...whiteGloss} />
        </mesh>
      </group>

      {/* Floating style: no legs, add a subtle ring glow if desired */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}
        material={new THREE.MeshBasicMaterial({ color: "#9ae6ff", wireframe: true, transparent: true, opacity: 0.25 })}>
        <torusGeometry args={[0.75, 0.01, 12, 80]} />
      </mesh>
    </group>
  );
}

export default function CuteRobotScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0.8, 1.0, 3.2], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 6]} intensity={1.1} castShadow />

      <group scale={[0.9, 0.9, 0.9]}>
        <CuteRobot />
      </group>

      {/* Soft shadow under the floating bot */}
      <ContactShadows
        position={[0, -0.75, 0]}
        scale={3}
        blur={2.5}
        opacity={0.45}
        far={2.5}
      />

      {/* Keep it static for background usage */}
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      <Environment preset="city" />
    </Canvas>
  );
}