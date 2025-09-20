"use client"

import React, { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

function Drone({ offset = 0 }: { offset?: number }) {
  const group = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + offset
    const radius = 1.5 + Math.sin(t * 0.7) * 0.2
    const x = Math.cos(t * 0.6) * radius
    const z = Math.sin(t * 0.6) * radius
    const y = Math.sin(t * 1.1) * 0.4
    if (group.current) {
      group.current.position.set(x, y, z)
      group.current.lookAt(0, 0, 0)
    }
  })

  return (
    <group ref={group}>
      <mesh castShadow>
        <boxGeometry args={[0.15, 0.06, 0.15]} />
        <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* glowing prop */}
      <mesh position={[0, 0.05, 0]}>
        <torusGeometry args={[0.12, 0.01, 8, 32]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

function Swarm() {
  const offsets = useMemo(() => Array.from({ length: 12 }, (_, i) => i * 0.5), [])
  return (
    <group>
      {offsets.map((o, i) => (
        <Drone key={i} offset={o} />
      ))}
      {/* Core beacon */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#a855f7" emissive="#7c3aed" emissiveIntensity={1.0} />
      </mesh>
    </group>
  )
}

export default function DroneSwarmScene() {
  return (
    <Canvas camera={{ position: [2.6, 1.8, 3.2], fov: 50 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 6]} intensity={1.1} castShadow />
      <Swarm />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Environment preset="city" />
    </Canvas>
  )
}