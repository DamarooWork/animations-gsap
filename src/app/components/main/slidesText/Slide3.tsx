'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

import Image from 'next/image'
import star from '@/../public/icons/slidesText/slide3/star.png'
export default function Slide3() {
  const slide3 = useRef(null)
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
      className="slide max-lg:flex max-lg:flex-col max-lg:justify-center
    p-[5vw]  min-w-[100vw] h-screen  bg-gradient-to-tl from-red-400/50 to-red-600/50"
    >
      <p className="text5 mb-[5vh]"></p>
      <p className="text6"></p>
      <Image
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
      <Image
        className="absolute bottom-8 left-1/3  w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
      <Image
        className="absolute bottom-8 right-1/3 -translate-x-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
       <Image
        className="absolute bottom-8 left-16 -translate-x-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
       <Image
        className="absolute bottom-8 right-8 -translate-x-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
       <Image
        className="absolute top-8 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
      <Image
        className="absolute top-8 left-1/3  w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
      <Image
        className="absolute top-8 right-1/3 -translate-x-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
       <Image
        className="absolute top-8 left-16 -translate-x-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
       <Image
        className="absolute top-8 right-8 -translate-x-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
      <Image
        className="absolute top-1/2 left-8 -translate-y-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
      <Image
        className="absolute top-1/2 right-8 -translate-y-1/2 -translate-x-1/2 w-10 sm:w-16 h-auto transition-transform will-change-transform duration-500 hover:scale-110 active:scale-90 animate-pulse hover:animate-none"
        src={star}
        alt="star icon"
      />
    </section>
  )
}
