"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

function Arm() {
  const base = useRef<THREE.Group>(null)
  const shoulder = useRef<THREE.Group>(null)
  const elbow = useRef<THREE.Group>(null)
  const wrist = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (base.current) base.current.rotation.y = Math.sin(t * 0.3) * 0.4
    if (shoulder.current) shoulder.current.rotation.z = Math.sin(t * 0.6) * 0.6 - 0.2
    if (elbow.current) elbow.current.rotation.z = Math.cos(t * 0.8) * 0.6 + 0.1
    if (wrist.current) wrist.current.rotation.z = Math.sin(t * 1.2) * 0.6
  })

  const metal = new THREE.MeshStandardMaterial({ color: new THREE.Color("#1f2937"), metalness: 0.8, roughness: 0.2 })
  const accent = new THREE.MeshStandardMaterial({ color: new THREE.Color("#22d3ee"), emissive: new THREE.Color("#22d3ee"), emissiveIntensity: 0.7 })

  return (
    <group position={[0, -0.5, 0]}>
      {/* Base */}
      <group ref={base}>
        <mesh castShadow position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 24]} />
          <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Shoulder */}
        <group ref={shoulder} position={[0, 0.1, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.4, 1.0, 0.4]} />
            { /* main segment */ }
            <primitive object={metal} attach="material" />
          </mesh>

          {/* Elbow */}
          <group ref={elbow} position={[0, 0.6, 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.35, 0.9, 0.35]} />
              <primitive object={metal} attach="material" />
            </mesh>

            {/* Wrist */}
            <group ref={wrist} position={[0, 0.55, 0]}>
              <mesh castShadow>
                <boxGeometry args={[0.3, 0.6, 0.3]} />
                <primitive object={metal} attach="material" />
              </mesh>

              {/* Gripper */}
              <mesh position={[0.18, 0.4, 0]} material={accent}>
                <boxGeometry args={[0.14, 0.14, 0.14]} />
              </mesh>
              <mesh position={[-0.18, 0.4, 0]} material={accent}>
                <boxGeometry args={[0.14, 0.14, 0.14]} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default function RoboticArmScene() {
  return (
    <Canvas camera={{ position: [2.6, 1.8, 3.2], fov: 50 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 6]} intensity={1.1} castShadow />
      <Arm />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Environment preset="warehouse" />
    </Canvas>
  )
}