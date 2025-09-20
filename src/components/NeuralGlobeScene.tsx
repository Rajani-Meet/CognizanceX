"use client"

import React, { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

function NeuralGlobe() {
  const points = useMemo(() => {
    const geo = new THREE.SphereGeometry(1.2, 32, 32)
    const positions: number[] = []
    const vertex = new THREE.Vector3()
    for (let i = 0; i < geo.attributes.position.count; i += 2) {
      vertex.fromBufferAttribute(geo.attributes.position as THREE.BufferAttribute, i)
      positions.push(vertex.x, vertex.y, vertex.z)
    }
    geo.dispose()
    return new Float32Array(positions)
  }, [])

  const group = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })

  return (
    <group ref={group}>
      {/* Node points */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#22d3ee" />
      </points>

      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 22, 22]} />
        <meshBasicMaterial wireframe color="#0ea5b6" />
      </mesh>

      {/* Random neural links */}
      {Array.from({ length: 22 }).map((_, i) => (
        <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}>
          <torusGeometry args={[1.2, 0.005, 8, 128]} />
          <meshBasicMaterial color="#a855f7" opacity={0.7} transparent />
        </mesh>
      ))}

      <pointLight position={[2, 1.5, 2]} intensity={0.7} color={"#22d3ee"} />
      <pointLight position={[-2, -1.5, -2]} intensity={0.5} color={"#a855f7"} />
    </group>
  )
}

export default function NeuralGlobeScene() {
  return (
    <Canvas camera={{ position: [2.6, 1.8, 3.2], fov: 50 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.5} />
      <NeuralGlobe />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Environment preset="city" />
    </Canvas>
  )
}