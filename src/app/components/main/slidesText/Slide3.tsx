'use client'
import { useRef } from 'react'
import useDeviceSize from '@/app/hooks/useDeviceSize'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

import Image from 'next/image'
import star from '@/../public/icons/slidesText/slide3/star.png'

export default function Slide3() {
  const slide3 = useRef(null)
  const [width] = useDeviceSize()
  const stars: IStar[] = [
    { id: 1, top: '32px', left: '50%' },
    { id: 2, top: '32px', left: '33.333333%' },
    { id: 3, top: '32px', left: '66.666666%' },
    { id: 4, top: '32px', left: 32 },
    { id: 5, top: '32px', left: width - 96 },
    { id: 6, top: '90%', left: '50%' },
    { id: 7, top: '90%', left: '33.333333%' },
    { id: 8, top: '90%', left: '66.666666%' },
    { id: 9, top: '90%', left: '32px' },
    { id: 10, top: '90%', left: width - 96 },
    { id: 11, top: '50%', left: '32px' },
    { id: 12, top: '50%', left: width - 96 },
  ]
  useGSAP(
    () => {
      const tlSlide3 = gsap.timeline({
        scrollTrigger: {
          trigger: slide3.current,
          start: () => '+=' + window.innerWidth / 2,
        },
      })
      tlSlide3.to('.text5', {
        text: "What's a Timeline?",
        duration: 1,
      })
      tlSlide3.to('.text6', {
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
      className="slide flex flex-col justify-center items-center p-[5vw]  min-w-[100vw] h-screen  bg-gradient-to-tl from-red-400/50 to-red-600/50"
    >
      <p className="text5 mb-[5vh]"></p>
      <p className="text6"></p>
      {stars.map((s) => {
        return (
          <Image
            key={s.id}
            style={{
              top: s.top,
              left: s.left,
              animationDuration: `${s.id < 2 ? '500' : s.id * 100}ms`,
            }}
            className="absolute -translate-x-1/2  -translate-y-1/2 w-10 sm:w-16 h-auto  animate-bounce"
            src={star}
            alt="star icon"
          />
        )
      })}
    </section>
  )
}
