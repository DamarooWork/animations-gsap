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
        start: '50% 50%',
        end: 'bottom 20%',
        endTrigger: '#secondElem',
        scrub: 1,
        pin: true,
        markers: true,
      },
      x: -600,
      rotation: 720,
      ease: 'power2.inOut',
    })
  }, {})
  return (
    <section
      ref={firstElem}
      className="mt-[120vh] flex gap-10 justify-center items-center  m-auto"
    >
      <p
        className="relative text-center w-48 h-48  border-red-400 
        border-2 rounded-full p-10 will-change-transform "
      >
        <span
          className="absolute top-[50%] left-[50%] translate-x-[-50%]
        translate-y-[-50%]"
        >
          Ебааааааааааать
        </span>
      </p>
      <p
        className="relative text-center w-48 h-48  border-red-400 
        border-2 rounded-full p-10 will-change-transform "
      >
        <span
          className="absolute top-[50%] left-[50%] translate-x-[-50%]
        translate-y-[-50%]"
        >
          А я норм c:
        </span>
      </p>
      <p
        className="relative text-center w-48 h-48  border-red-400 
        border-2 rounded-full p-10 will-change-transform "
      >
        <span
          className="absolute top-[50%] left-[50%] translate-x-[-50%]
        translate-y-[-50%]"
        >
          Ебануться!
        </span>
      </p>
    </section>
  )
}
