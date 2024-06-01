import React from 'react'

const Box = ({ position }) => {
  return (
    <mesh castShadow position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color='red' />
      </boxGeometry>
    </mesh>
  )
}

export default Box
