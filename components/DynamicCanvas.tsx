"use client"

import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'

const ParticleSystem = dynamic(() => import('./ParticleSystem'), { ssr: false })

export default function DynamicCanvas() {
  return (
    <Canvas className="absolute inset-0">
      <ParticleSystem />
    </Canvas>
  )
}

