'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

import Image from 'next/image'
import btn from '@/../public/icons/slidesText/slide2/btn.png'
import airplane from '@/../public/icons/slidesText/slide2/airplane.png'

export default function Slide2() {
  const slide2 = useRef(null)
  const btnRef = useRef<HTMLImageElement>(null)
  const airplaneRef = useRef<HTMLImageElement>(null)
  let direction = 1
  useGSAP(
    () => {
      const tlSlide2 = gsap.timeline({
        scrollTrigger: {
          trigger: slide2.current,
          start: () => '+=' + window.innerWidth / 4,
        },
      })
      tlSlide2.to('.text3', {
        text: "What's a Tween? ",
        duration: 1,
      })
      tlSlide2.to('.text4', {
        delay: 0.5,
        text: "A Tween is what does all the animation work - think of it like a high-performance property setter. You feed in targets (the objects you want to animate), a duration, and any properties you want it to animate and then when the Tween's playhead moves to a new position, figures out what the property values should be at that point applies them accordingly.",
        duration: 12,
        ease: 'none',
      })
    },
    { scope: slide2 }
  )
  const handleBtnClick = () => {
    switch (direction) {
      case 1:
        gsap.to(airplaneRef.current, {
          top: () => {
            if (airplaneRef.current)
              return window.innerHeight - airplaneRef.current.width - 16
            else return 0
          },
          left: () => {
            if (airplaneRef.current)
              return window.innerWidth - airplaneRef.current.width - 16
            else return 0
          },
          rotateZ: 20,
          duration: 2,
          rotateY: 0,
          ease: 'power1.inOut',
        })
        direction = 2
        break
      case 2:
        gsap.to(airplaneRef.current, {
          top: () => {
            if (airplaneRef.current)
              return window.innerHeight - airplaneRef.current.width - 16
            else return 0
          },
          left: 16,
          rotateY: 180,
          duration: 2,
          ease: 'power1.inOut',
        })
        direction = 3
        break
      case 3:
        gsap.to(airplaneRef.current, {
          top: '16px',
          left: () => {
            if (airplaneRef.current)
              return window.innerWidth - airplaneRef.current.width - 16
            else return 0
          },
          rotateZ: -20,
          rotateY: 0,
          duration: 2,
          ease: 'power1.inOut',
        })
        direction = 4
        break
      case 4:
        gsap.to(airplaneRef.current, {
          top: 16,
          left: 16,
          rotateZ: 20,
          rotateY: 180,
          duration: 2,
          ease: 'power1.inOut',
        })
        direction = 1
        break
      default:
        break
    }
  }
  return (
    <section
      ref={slide2}
      className="slide flex flex-col justify-center
   items-center px-10 sm:px-32  min-w-[100vw] h-screen  bg-gradient-to-tl from-violet-300/60 to-violet-600/60"
    >
      <p className="text3 mb-[5vh]"></p>
      <p className="text4"></p>
      <Image
        onClick={handleBtnClick}
        ref={btnRef}
        className="absolute bottom-8 left-1/2 w-10 sm:w-16 h-auto cursor-pointer transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={btn}
        alt="button icon"
      />
      <Image
        ref={airplaneRef}
        className="absolute top-4 left-8 w-12 sm:w-24 h-auto"
        src={airplane}
        alt="airplane icon"
      />
    </section>
  )
}
