'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)
export default function SecondBox() {
  const secondElem = useRef<HTMLParagraphElement>(null)
  useGSAP(() => {
    gsap.to(secondElem.current, {
      scrollTrigger: {
        trigger: secondElem.current,
        toggleActions: 'play pause reverse pause',
      },
      y: -100,
      rotation: 360,
      duration: 3,
    })
  }, {})
  return (
    <section className="mt-[90vh]">
      <p
        ref={secondElem}
        className="text-center w-28 m-auto border-red-400 
        border-4 rounded-2xl px-4 py-2 will-change-transform"
      >
        Ну а я второй!
      </p>
    </section>
  )
}
