"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

// Simple stylized robot built with primitives
function Robot() {
  const group = useRef<THREE.Group>(null)
  const head = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      // gentle float and idle sway
      group.current.position.y = Math.sin(t * 1.2) * 0.1
      group.current.rotation.y = Math.sin(t * 0.6) * 0.2
    }
    if (head.current) {
      // head scanning motion
      head.current.rotation.y = Math.sin(t * 1.4) * 0.5
      head.current.rotation.x = Math.cos(t * 1.2) * 0.1
    }
  })

  const metal = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1e293b"),
    metalness: 0.9,
    roughness: 0.25,
  })
  const neon = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#22d3ee"),
    emissive: new THREE.Color("#0ea5b6"),
    emissiveIntensity: 1.4,
    metalness: 0.2,
    roughness: 0.3,
  })
  const accent = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#a855f7"),
    emissive: new THREE.Color("#7c3aed"),
    emissiveIntensity: 0.8,
    metalness: 0.4,
    roughness: 0.5,
  })

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {/* Body core */}
      <mesh material={metal} castShadow receiveShadow position={[0, 0.2, 0]}
        geometry={new THREE.CapsuleGeometry(0.45, 0.9, 8, 16)} />

      {/* Chest panel */}
      <mesh position={[0, 0.3, 0.46]}>
        <boxGeometry args={[0.55, 0.35, 0.05]} />
        <meshStandardMaterial color="#0b132b" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Chest lights */}
      <mesh position={[-0.15, 0.3, 0.49]} material={neon}>
        <boxGeometry args={[0.12, 0.12, 0.04]} />
      </mesh>
      <mesh position={[0.0, 0.3, 0.49]} material={accent}>
        <boxGeometry args={[0.12, 0.12, 0.04]} />
      </mesh>
      <mesh position={[0.15, 0.3, 0.49]} material={neon}>
        <boxGeometry args={[0.12, 0.12, 0.04]} />
      </mesh>

      {/* Head */}
      <group ref={head} position={[0, 0.95, 0]}>
        <mesh material={metal} castShadow>
          <sphereGeometry args={[0.3, 24, 24]} />
        </mesh>
        {/* visor */}
        <mesh position={[0, 0.02, 0.26]}>
          <boxGeometry args={[0.45, 0.2, 0.06]} />
          <meshStandardMaterial
            color="#051923"
            metalness={0.6}
            roughness={0.2}
            emissive="#082f49"
            emissiveIntensity={0.6}
          />
        </mesh>
        {/* eyes */}
        <mesh position={[-0.1, 0.03, 0.29]} material={neon}>
          <boxGeometry args={[0.08, 0.06, 0.02]} />
        </mesh>
        <mesh position={[0.1, 0.03, 0.29]} material={neon}>
          <boxGeometry args={[0.08, 0.06, 0.02]} />
        </mesh>
        {/* antenna */}
        <mesh position={[0, 0.42, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
          <meshStandardMaterial color="#2dd4bf" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.63, 0]} material={accent}>
          <sphereGeometry args={[0.05, 16, 16]} />
        </mesh>
      </group>

      {/* Arms */}
      <group position={[-0.55, 0.35, 0]}> {/* left */}
        <mesh material={metal}>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
        </mesh>
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 12]} />
          <meshStandardMaterial color="#1f2937" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.62, 0]} material={neon}>
          <sphereGeometry args={[0.08, 16, 16]} />
        </mesh>
      </group>
      <group position={[0.55, 0.35, 0]}> {/* right */}
        <mesh material={metal}>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
        </mesh>
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 12]} />
          <meshStandardMaterial color="#1f2937" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.62, 0]} material={neon}>
          <sphereGeometry args={[0.08, 16, 16]} />
        </mesh>
      </group>

      {/* Legs */}
      <group position={[-0.2, -0.45, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.4, 12]} />
          <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.28, 0.05]}>
          <boxGeometry args={[0.2, 0.08, 0.3]} />
          <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
      <group position={[0.2, -0.45, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.4, 12]} />
          <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.28, 0.05]}>
          <boxGeometry args={[0.2, 0.08, 0.3]} />
          <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Holographic ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <torusGeometry args={[0.9, 0.01, 16, 100]} />
        <meshBasicMaterial color="#22d3ee" wireframe opacity={0.6} transparent />
      </mesh>

      {/* Small accent lights */}
      <pointLight position={[0.6, 0.9, 0.6]} intensity={0.6} color={"#22d3ee"} distance={2} />
      <pointLight position={[-0.6, 0.5, 0.6]} intensity={0.5} color={"#a855f7"} distance={2} />
    </group>
  )
}

export default function RobotScene() {
  return (
    <Canvas camera={{ position: [0.8, 0.9, 3.4], fov: 45 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 6]} intensity={1.1} castShadow />
      <Robot />
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      <Environment preset="night" />
    </Canvas>
  )
}