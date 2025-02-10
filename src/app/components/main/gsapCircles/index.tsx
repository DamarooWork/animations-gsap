'use client'
import { useRef } from 'react'
import gsap, { TweenLite } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

const circlesArr = [
  { id: 'First', text: 'First!' },
  { id: 'Second', text: 'Second!' },
  { id: 'Third', text: 'Third!' },
]
const bubbles = [
  { id: 1, bottom: '1vh', left: '10vw', width: '16px', height: '50px' },
  { id: 2, bottom: '10vh', left: '80vw', width: '8px', height: '60px' },
  { id: 3, bottom: '-15vh', left: '70vw', width: '50px', height: '50px' },
  { id: 4, bottom: '13vh', left: '50vw', width: '8px', height: '30px' },
  { id: 5, bottom: '21vh', left: '40vw', width: '12px', height: '40px' },
  { id: 6, bottom: '31vh', left: '20vw', width: '50px', height: '50px' },
  { id: 7, bottom: '-30vh', left: '50vw', width: '50px', height: '50px' },
  { id: 8, bottom: '-50vh', left: '20vw', width: '50px', height: '50px' },
  { id: 9, bottom: '-50vh', left: '60vw', width: '12px', height: '50px' },
]

export default function GsapCircles() {
  const gsapCircles = useRef<HTMLElement>(null)
  const scrolling = useRef<HTMLDivElement>(null)
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
      const bubbleArr = gsap.utils.toArray<HTMLDivElement>('.bubble')

      bubbleArr.forEach((bubble) =>
        gsap.to(bubble, {
          scrollTrigger: {
            trigger: gsapCircles.current,
            toggleActions: 'play pause reverse pause',
            start: '50% 50%',
            end: 'bottom 20%',
            endTrigger: '#slidesText',
            scrub: 5,
          },
          y: '-100vh',
        })
      )

      tl.to(scrolling.current, {
        duration: 3,
        x: () => '-=' + '20vw',
        rotation: '+=720',
        ease: 'power1.inOut',
      })
      tl.to(scrolling.current, {
        duration: 6,
        x: () => '+=' + '40vw',
        rotation: '-=1440',
        ease: 'power2.inOut',
      })
      tl.to(scrolling.current, {
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
      className="mt-[30vh] h-[100vh] relavite  sm:text-2xl  text-orange-300 flex justify-center items-center overflow-hidden"
    >
      {bubbles.map((bubble) => {
        return (
          <div
            key={bubble.id}
            style={{
              width: `${bubble.width}`,
              height: `${bubble.height}`,
              bottom: `${bubble.bottom}`,
              left: `${bubble.left}`,
            }}
            className={`bubble absolute bg-orange-400 rounded-full`}
          ></div>
        )
      })}

      <div
        ref={scrolling}
        className=" flex gap-[2vw] justify-center items-center "
      >
        <div className="max-sm:w-4 max-sm:h-4 w-8 h-8 absolute top-0 left-0 bg-orange-400 rounded-full"></div>
        <div className="max-sm:w-4 max-sm:h-4 w-8 h-8 absolute bottom-0 left-0 bg-orange-400 rounded-full"></div>
        <div className="max-sm:w-4 max-sm:h-4 w-8 h-8 absolute top-0 right-0 bg-orange-400 rounded-full"></div>
        <div className="max-sm:w-4 max-sm:h-4 w-8 h-8 absolute bottom-0 right-0 bg-orange-400 rounded-full"></div>
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
      </div>
    </section>
  )
}
