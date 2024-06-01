import React, { useRef, useState } from 'react'
import playerIcon from './images/head.png'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

const PlayerIcon = React.forwardRef(
  ({ startPosition, position, setPosition }, ref) => {
    // const ref = useRef()
    const texture = useLoader(THREE.TextureLoader, playerIcon)

    const { x } = useSpring({
      from: { x: startPosition[0] },
      to: { x: position[0] },
    })

    useFrame(() => {
      // if (!ref.current) return
      // if (targetPositionX > ref.current.position.x) {
      //   ref.current.position.x += 0.001
      // }
      // if (targetPositionZ > ref.current.position.z) {
      //   ref.current.position.z += 0.001
      // }
    })

    return (
      <animated.mesh position={[x, 0.5, 0]} ref={ref} castShadow>
        <boxGeometry attach='geometry' args={[0.5, 0.5, 0.1]} />
        <meshBasicMaterial attach='material' map={texture} side='front' />
      </animated.mesh>
    )
  }
)

export default PlayerIcon
