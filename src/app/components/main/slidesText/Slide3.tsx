'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

export default function Slide3() {
  const slide3 = useRef(null)
  useGSAP(
    () => {
      const tlPanel3 = gsap.timeline({
        scrollTrigger: {
          trigger: slide3.current,
          start: () => '+=' + window.innerWidth / 2,
        },
      })
      tlPanel3.to('.text5', {
        text: "What's a Timeline?",
        duration: 1,
      })
      tlPanel3.to('.text6', {
        delay: 0.5,
        text: "A Timeline is a container for Tweens. It's the ultimate sequencing tool that lets you position animations in time wherever you want and then control the whole sequence easily with methods like pause(), play(), progress(), reverse(), timeScale(), etc.",
        duration: 7,
        ease: 'none',
      })
    },
    { scope: slide3 }
  )
  return (
    <section
      ref={slide3}
      className="slide max-lg:flex max-lg:flex-col max-lg:justify-center
    p-[5vw]  min-w-[100vw] h-[100vh]  bg-gradient-to-tl from-red-400/50 to-red-600/50"
    >
      <p className="text5 mb-[5vh]"></p>
      <p className="text6"></p>
    </section>
  )
}
