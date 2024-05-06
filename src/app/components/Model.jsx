import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { vertex, fragment } from '../components/Shader'
import { useFrame } from '@react-three/fiber'
import { waveShaderMaterial } from '../components/Shader'



export default function model() {
  const waveRef = useRef()
  useFrame(({ clock }) => {
    if (waveRef.current) {
      waveRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });


  return (
   
    <mesh>
      <planeGeometry args={[3, 3, 15, 15]}/>
      {/* <meshBasicMaterial color={"red"} wireframe={true}/> */}
      <shaderMaterial
      ref={waveRef}
       vertexShader={vertex}
       fragmentShader={fragment}
       wireframe={true}
      uniforms = {{uTime: {value: 0.0}}}
       />
    </mesh>
  )
}
