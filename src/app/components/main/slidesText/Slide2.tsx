'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

export default function Slide2() {
  const slide2 = useRef(null)
  useGSAP(
    () => {
      const tlPanel2 = gsap.timeline({
        scrollTrigger: {
          trigger: slide2.current,
          start: () => '+=' + window.innerWidth / 4,
        },
      })
      tlPanel2.to('.text3', {
        text: "What's a Tween? ",
        duration: 1,
      })
      tlPanel2.to('.text4', {
        delay: 0.5,
        text: "A Tween is what does all the animation work - think of it like a high-performance property setter. You feed in targets (the objects you want to animate), a duration, and any properties you want it to animate and then when the Tween's playhead moves to a new position, figures out what the property values should be at that point applies them accordingly.",
        duration: 12,
        ease: 'none',
      })
    },
    { scope: slide2 }
  )
  return (
    <section
      ref={slide2}
      className="slide max-lg:flex max-lg:flex-col max-lg:justify-center
   p-[5vw]  min-w-[100vw] h-[100vh]  bg-gradient-to-tl from-violet-300/60 to-violet-600/60"
    >
      <p className="text3 mb-[5vh]"></p>
      <p className="text4"></p>
    </section>
  )
}
