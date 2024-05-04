import React from 'react'
import Model from '../components/Model'
import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return (
    <Canvas>
      <Model />
    </Canvas>
  )
}
