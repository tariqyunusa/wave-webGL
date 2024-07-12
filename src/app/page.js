"use client"
import '../app/styles.css'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/app/components/Scene'), {
  ssr: false
})



export default function Home() {
  return (
    <section>
     
      <main>
       <div className='scene'>
        <Scene />
       </div>
      </main>
    </section>

    // <Scene />
  );
}
