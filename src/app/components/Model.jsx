import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { vertex, fragment } from '../components/Shader'
import { extend, useFrame, useLoader, useThree } from '@react-three/fiber'





export default function Model({img}) {
  const [texture, setTexture] = useState()
  const waveRef = useRef()
 
  console.log('recieved image from scene', img)

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(img, (loadedTexture) => {
      setTexture((prevTexture) => {
        if (prevTexture) {
          prevTexture.dispose(); 
        }
        return loadedTexture;
      });
    });
  }, [img]);
  useFrame(({ clock }) => {
    if (waveRef.current) {
      waveRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  if(!texture){
    console.log('image is undefined')
    return null;
  }
 

  // const image= useLoader(THREE.TextureLoader, img)

   


  return (
    <mesh >
      <planeGeometry args={[0.6, 0.9, 16, 16]}/>
      {/* <meshBasicMaterial color={"red"} wireframe={true}/> */}
      <shaderMaterial
      ref={waveRef}
       vertexShader={vertex}
       fragmentShader={fragment}
      //  wireframe={true}
      uTexture = {texture}
      
      uniforms = {{uTime: {value: 0.0}, uTexture: { value: texture } }}
        attach = "material"
       />
    </mesh>

    
  )
}