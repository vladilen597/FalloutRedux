import { Grid } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import GridMap from './GridMap/GridMap.jsx'
import { Physics } from '@react-three/cannon'
import PlayerIcon from './PlayerIcon/PlayerIcon.jsx'
import Camera from './Camera/Camera.jsx'

const ThreejsVersion = () => {
  const [startPosition, setStartPosition] = useState([0, 0.5, 0])
  const [position, setPosition] = useState([0, 0.5, 0])
  const playerRef = useRef()

  const updateCamera = (position) => {
    setCameraPosition(position)
  }

  useEffect(() => {
    if (!playerRef.current) return
    setStartPosition([
      playerRef.current.position.x,
      playerRef.current.position.y,
      playerRef.current.position.z,
    ])
  }, [position])

  return (
    <div className='three-js-game'>
      <Suspense fallback={null}>
        <Canvas
          style={{ height: '100vh' }}
          camera={{
            rotateX: Math.PI / 2,
            fov: 40,
          }}
          shadows
        >
          <Camera />
          <ambientLight intensity={1} color='#fff' />
          <directionalLight
            position={[8, 5, 8]}
            intensity={1}
            castShadow
            color='#fff'
          />
          <Physics>
            <Grid infiniteGrid />
            <GridMap
              setPosition={setPosition}
              updateCamera={updateCamera}
              position={position}
              startPosition={startPosition}
            />
            <PlayerIcon
              ref={playerRef}
              position={position}
              setPosition={setPosition}
              startPosition={startPosition}
            />
          </Physics>

          <color attach='background' args={['#a0d9ef']} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default ThreejsVersion
