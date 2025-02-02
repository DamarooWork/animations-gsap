'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)
export default function FirstBox() {
  const firstElem = useRef<HTMLParagraphElement>(null)
  useGSAP(() => {
    gsap.to(firstElem.current, {
      scrollTrigger: {
        trigger: firstElem.current,
        toggleActions: 'play pause reverse pause',
        markers: true,
      },
      y: -200,
      rotation: 360,
      duration: 3,
      ease: 'power2.inOut',
    })
  }, {})
  return (
    <section className="mt-[120vh]">
      <p
        ref={firstElem}
        className="text-center w-28 h-28 m-auto border-red-400 
        border-2 rounded-full p-6 will-change-transform "
      >
        Я первый!
      </p>
    </section>
  )
}
