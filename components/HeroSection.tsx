"use client"

import { Canvas } from '@react-three/fiber'
import ParticleSystem from './ParticleSystem'

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-blue-900 to-black">
      <Canvas className="absolute inset-0">
        <ParticleSystem />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            データのつながりが未来を創る
          </h1>
          <p className="text-xl text-blue-300">NDMの顧客データ活用で、あなたのビジネスを最大化</p>
        </div>
      </div>
    </div>
  )
}

