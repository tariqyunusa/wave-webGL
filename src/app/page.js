"use client"
import '../app/styles.css'
import { Canvas } from '@react-three/fiber'
import {planeBufferGeometry} from "three"


const Scene = () => {
  return (
    <Canvas>
      <mesh>
        <planeBufferGeometry args={[3, 5]}/>
        <meshBasicMaterial color="red" /> {/* Adding a basic material */}
      </mesh>
    </Canvas>
  )
}

export default function Home() {
  return (
    <Scene />
  );
}
