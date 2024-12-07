import { useRef, useMemo, useState, useCallback, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Text, Html } from '@react-three/drei'
import { getRandomCharOrWord } from '../utils/randomChar'
import { wordDefinitions } from '../utils/wordDefinitions'

const ParticleSystem = () => {
  const points = useRef<THREE.Points>(null!)
  const linesMesh = useRef<THREE.LineSegments>(null!)
  const textGroup = useRef<THREE.Group>(null!)
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<[number, number, number] | null>(null)
  const { camera, size } = useThree()

  const particleCount = 200
  const maxDistance = 2

  const particles = useMemo(() => {
    const temp = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      temp[i] = (Math.random() - 0.5) * 20
      temp[i + 1] = (Math.random() - 0.5) * 20
      temp[i + 2] = (Math.random() - 0.5) * 20
    }
    return temp
  }, [])

  const textContent = useMemo(() => {
    return Array(particleCount).fill(0).map(() => getRandomCharOrWord())
  }, [])

  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 }), [])

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const mouse = new THREE.Vector2(
      (event.clientX / size.width) * 2 - 1,
      -(event.clientY / size.height) * 2 + 1
    )

    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObjects(textGroup.current.children, true)

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object as THREE.Mesh
      const content = (intersectedObject as any).content
      if (wordDefinitions[content]) {
        setHoveredWord(content)
        setTooltipPosition(intersectedObject.position.toArray())
      } else {
        setHoveredWord(null)
        setTooltipPosition(null)
      }
    } else {
      setHoveredWord(null)
      setTooltipPosition(null)
    }
  }, [camera, size])

  useFrame((state) => {
    if (points.current && linesMesh.current && textGroup.current) {
      const positions = points.current.geometry.attributes.position.array as Float32Array
      const linePositions: number[] = []

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.01
        positions[i + 1] += Math.cos(state.clock.elapsedTime * 0.2 + i) * 0.01
        positions[i + 2] += Math.sin(state.clock.elapsedTime * 0.1 + i) * 0.01

        // Update text positions
        const textMesh = textGroup.current.children[i / 3] as THREE.Mesh
        textMesh.position.set(positions[i], positions[i + 1], positions[i + 2])
        textMesh.lookAt(state.camera.position)

        for (let j = i + 3; j < particleCount * 3; j += 3) {
          const dx = positions[i] - positions[j]
          const dy = positions[i + 1] - positions[j + 1]
          const dz = positions[i + 2] - positions[j + 2]
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < maxDistance) {
            linePositions.push(positions[i], positions[i + 1], positions[i + 2])
            linePositions.push(positions[j], positions[j + 1], positions[j + 2])
          }
        }
      }

      points.current.geometry.attributes.position.needsUpdate = true
      linesMesh.current.geometry.setFromPoints(linePositions.map((_, i) => new THREE.Vector3(linePositions[i], linePositions[i + 1], linePositions[i + 2])))
      linesMesh.current.geometry.attributes.position.needsUpdate = true
    }
  })

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <group>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color={0xffffff} />
      </points>
      <lineSegments ref={linesMesh} material={lineMaterial}>
        <bufferGeometry />
      </lineSegments>
      <group ref={textGroup}>
        {textContent.map((text, index) => (
          <Text
            key={index}
            position={[particles[index * 3], particles[index * 3 + 1], particles[index * 3 + 2]]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {text}
          </Text>
        ))}
      </group>
      {hoveredWord && tooltipPosition && (
        <Html position={tooltipPosition}>
          <div className="bg-white text-black p-2 rounded shadow-lg max-w-xs">
            <h3 className="font-bold">{hoveredWord}</h3>
            <p>{wordDefinitions[hoveredWord]}</p>
          </div>
        </Html>
      )}
    </group>
  )
}

export default ParticleSystem

