import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { vertex, fragment } from '../components/Shader'
import { extend, useFrame, useLoader } from '@react-three/fiber'





export default function model() {
  const waveRef = useRef()
  useFrame(({ clock }) => {
    if (waveRef.current) {
      waveRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });
 
  const image = useLoader(THREE.TextureLoader, '/image.jpg') 


  return (
    <mesh >
      <planeGeometry args={[0.3, 0.6, 16, 16]}/>
      {/* <meshBasicMaterial color={"red"} wireframe={true}/> */}
      <shaderMaterial
      ref={waveRef}
       vertexShader={vertex}
       fragmentShader={fragment}
      //  wireframe={true}
      uTexture = {image}
      uniforms = {{uTime: {value: 0.0}, uTexture: { value: image } }}
      
       />
    </mesh>

    
  )
}