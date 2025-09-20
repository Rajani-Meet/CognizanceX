"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

function AICore() {
  const group = useRef<THREE.Group>(null)
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const ring3 = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (group.current) group.current.rotation.y = t * 0.3
    if (ring1.current) ring1.current.rotation.x = t * 0.8
    if (ring2.current) ring2.current.rotation.y = -t * 0.6
    if (ring3.current) ring3.current.rotation.z = t * 0.5
  })

  const neonBlue = new THREE.Color("#22d3ee")
  const neonPurple = new THREE.Color("#a855f7")

  return (
    <group ref={group}>
      {/* Core cube */}
      <mesh castShadow>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color="#0b132b" metalness={0.8} roughness={0.2} emissive="#0e7490" emissiveIntensity={0.3} />
      </mesh>

      {/* Glowing nucleus */}
      <mesh>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color={neonBlue} emissive={neonBlue} emissiveIntensity={1.2} metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Rotating energy rings */}
      <mesh ref={ring1} position={[0, 0, 0]}>
        <torusGeometry args={[1.0, 0.02, 16, 128]} />
        <meshStandardMaterial color={neonBlue} emissive={neonBlue} emissiveIntensity={0.8} metalness={0.1} roughness={0.2} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.0, 0.02, 16, 128]} />
        <meshStandardMaterial color={neonPurple} emissive={neonPurple} emissiveIntensity={0.7} metalness={0.1} roughness={0.2} />
      </mesh>
      <mesh ref={ring3} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.0, 0.02, 16, 128]} />
        <meshStandardMaterial color={neonBlue} emissive={neonBlue} emissiveIntensity={0.6} metalness={0.1} roughness={0.2} />
      </mesh>

      {/* Accent lights */}
      <pointLight position={[2, 2, 2]} intensity={0.7} color={"#22d3ee"} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color={"#a855f7"} />
    </group>
  )
}

export default function AICoreScene() {
  return (
    <Canvas camera={{ position: [2.6, 1.8, 3.2], fov: 50 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 6]} intensity={1.1} castShadow />
      <AICore />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Environment preset="night" />
    </Canvas>
  )
}