'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

const circlesArr = [
  { id: 'First', text: 'First!' },
  { id: 'Second', text: 'Second!' },
  { id: 'Third', text: 'Third!' },
]

export default function gsapCircles() {
  const gsapCircles = useRef<HTMLParagraphElement>(null)
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gsapCircles.current,
          toggleActions: 'play pause reverse pause',
          start: '50% 50%',
          end: 'bottom 20%',
          endTrigger: '#slidesText',
          scrub: 2,
          pin: true,
        },
      })
      tl.to(gsapCircles.current, {
        duration: 3,
        x: () => '-=' + '20vw',
        rotation: '+=720',
        ease: 'power1.inOut',
      })
      tl.to(gsapCircles.current, {
        duration: 6,
        x: () => '+=' + '40vw',
        rotation: '-=1440',
        ease: 'power2.inOut',
      })
      tl.to(gsapCircles.current, {
        duration: 3,
        x: 0,
        rotation: '+=720',
        ease: 'power3.inOut',
      })

      tl.to('#First', {
        duration: 2,
        text: 'Welcome',
        ease: 'power1.inOut',
      })
      tl.to('#Second', {
        duration: 2,
        text: 'To',
        ease: 'power1.inOut',
      })
      tl.to('#Third', {
        duration: 2,
        text: 'GSAP!',
        ease: 'power1.inOut',
      })
    },
    { scope: gsapCircles }
  )
  return (
    <section
      ref={gsapCircles}
      id="gsapCircles"
      className="mt-[50vh] flex 
       gap-[2vw]  justify-center items-center text-orange-300"
    >
      {circlesArr.map((circle) => {
        return (
          <div
            key={circle.id}
            className="relative text-center w-[10vw] h-[10vw] border-orange-400 border-2 rounded-full p-10 will-change-transform"
          >
            <p
              id={circle.id}
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              {circle.text}
            </p>
          </div>
        )
      })}
    </section>
  )
}
