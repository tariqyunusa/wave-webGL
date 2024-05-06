import React, { Suspense } from 'react'
import Model from '../components/Model'
import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
      <Model />
      </Suspense>
     
    </Canvas>
  )
}
