'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

export default function Slide4() {
  const slide4 = useRef(null)
  useGSAP(
    () => {
      const tlSlide4 = gsap.timeline({
        scrollTrigger: {
          trigger: slide4.current,
          start: () => '+=' + (window.innerWidth * 3) / 4,
        },
      })
      tlSlide4.to('.text7', {
        text: `Easing`,
        duration: 1,
        ease: 'none',
        textAlign: 'center',
      })
      tlSlide4.to('.text8', {
        delay: 0.5,
        text: `Easing is the primary way to change the timing of your tweens.`,
        duration: 2,
        ease: 'none',
      })
      tlSlide4.to('.text9', {
        delay: 0.5,
        text: `Simply changing the ease can adjust the entire feel and personality of your animation.`,
        duration: 3,
        ease: 'none',
      })
      tlSlide4.to('.text10', {
        delay: 0.5,
        text: `There are infinite eases that you can use in GSAP so we created the visualizer below to help you choose exactly the type of easing that you need.`,
        duration: 4,
        ease: 'none',
      })
    },
    { scope: slide4 }
  )
  return (
    <section
      ref={slide4}
      className="slide max-lg:flex max-lg:flex-col max-lg:justify-center
     p-[5vw]  min-w-[100vw] h-[100vh]    bg-gradient-to-tl from-blue-300/60 to-blue-700/60"
    >
      <p className="text7 mb-[5vh]"></p>
      <p className="text8 mb-[5vh]"></p>
      <p className="text9 mb-[5vh]"></p>
      <p className="text10"></p>
    </section>
  )
}
