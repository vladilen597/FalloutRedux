import { Grid, Plane, Sphere, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { BoxHelper, PlaneGeometry } from 'three'
import * as THREE from 'three'

const GridMap = ({ position, setPosition }) => {
  const setPlayerPosition = (event) => {
    setPosition([event.point.x, 0.5, event.point.z])
  }

  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      onPointerUp={setPlayerPosition}
      receiveShadow
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color='#278E2A' side={THREE.DoubleSide} />
    </mesh>
  )
}

export default GridMap
