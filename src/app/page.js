"use client"
import '../app/styles.css'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/app/components/Scene'), {
  ssr: false
})



export default function Home() {
  return (
    <div className='col'>
 <Scene />
    </div>
   
  );
}
