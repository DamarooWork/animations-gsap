'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

export default function Slide1() {
  const slide1 = useRef(null)
  useGSAP(
    () => {
      const tlSlide1 = gsap.timeline({
        scrollTrigger: {
          trigger: slide1.current,
          snap: 1 / 2,
          end: () => '+=' + window.innerHeight,
        },
        ease: 'none',
      })
      tlSlide1.to('.text1', {
        text: "The gsap object serves as the access point for most of GSAP's functionality. ",
        duration: 3,
      })
      tlSlide1.to('.text2', {
        text: "It's just a generic object with various methods and properties that create and control Tweens and Timelines, two of the most important concepts to understand.",
        duration: 6,
      })
    },
    { scope: slide1 }
  )
  return (
    <section
      ref={slide1}
      className="slide max-lg:flex max-lg:flex-col max-lg:justify-center
   p-[10vw]  min-w-[100vw] h-screen  text-white bg-gradient-to-tl from-orange-300/80 to-orange-600/80"
    >
      <p className="text1 mb-[5vh]"></p>
      <p className="text2"></p>
    </section>
  )
}
