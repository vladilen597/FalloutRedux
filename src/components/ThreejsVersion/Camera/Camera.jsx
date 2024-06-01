import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Camera = () => {
  return (
    <OrbitControls
      maxPolarAngle={1.5}
      minDistance={1}
      maxDistance={Math.PI * 2}
      // enablePan={false}
    />
  )
}

export default Camera
