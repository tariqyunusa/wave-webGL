import React, { Suspense } from 'react'
import Model from '../components/Model'
import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return (
    <Canvas camera={{fov: 10}}>
      <Suspense fallback={null}>
      <Model />
      </Suspense>
     
    </Canvas>
  )
}
