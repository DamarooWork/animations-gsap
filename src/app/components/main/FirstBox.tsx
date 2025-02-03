'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)
export default function FirstBox() {
  const firstElem = useRef<HTMLParagraphElement>(null)
  useGSAP(
    () => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: firstElem.current,
          toggleActions: 'play pause reverse pause',
          start: '50% 50%',
          end: 'bottom 20%',
          endTrigger: '#secondElem',
          scrub: 3,
          pin: true,
          // markers: true,
        },
      })
      tl.to(firstElem.current, {
        duration: 3,
        x: -600,
        rotation: '+=720',
        ease: 'power1.inOut',
      })
      tl.to(firstElem.current, {
        duration: 6,
        x: 600,
        rotation: '-=1440',
        ease: 'power2.inOut',
      })
      tl.to(firstElem.current, {
        duration: 3,
        x: 0,
        rotation: '+=720',
        ease: 'power3.inOut',
      })
    },
    { scope: firstElem }
  )
  return (
    <section
      ref={firstElem}
      className="mt-[50vh] flex 
       gap-10  justify-center items-center "
    >
      <p
        className="relative flex-[3, 3, 0%] text-center w-48 h-48  border-red-400 
        border-2 rounded-full p-10 will-change-transform "
      >
        <span
          className="absolute top-[50%] left-[50%] translate-x-[-50%]
        translate-y-[-50%]"
        >
          Meoooow
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
          Auf!
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
          Krya-krya
        </span>
      </p>
    </section>
  )
}
