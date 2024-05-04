import React from 'react'
import { vertex, fragment } from '../components/Shader'


export default function model() {
  return (
    <mesh>
      <planeGeometry args={[3, 3, 15, 15]}/>
      {/* <meshBasicMaterial color={"red"} wireframe={true}/> */}
      <shaderMaterial
       vertexShader={vertex}
       fragmentShader={fragment}
       wireframe={true}
       />
    </mesh>
  )
}
