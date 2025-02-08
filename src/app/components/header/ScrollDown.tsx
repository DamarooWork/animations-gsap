'use client'
import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import arrowDown from '../../../../public/icons/arrowDown.png'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)

export default function ScrollDown() {
  const [show, setShow] = useState(0)
  const scrollDown = useRef(null)
  useEffect(() => {
    setShow(window.scrollY)
    window.addEventListener('scroll', () => setShow(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => setShow(window.scrollY))
    }
  }, [])
  useGSAP(
    () => {
      gsap.from(scrollDown.current, {
        delay: 0.8,
        yPercent: 50,
        duration: 0.5,
        ease: 'none',
        opacity: 0,
      })
    },
    { scope: scrollDown }
  )
  function handleClick() {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: '#gsapCircles' },
      ease: 'power2.inOut',
    })
  }
  return (
    <>
      {show < 300 ? (
        <section
          onClick={handleClick}
          ref={scrollDown}
          className="flex flex-col items-center gap-2 text-2xl fixed top-[80vh] lg:top-[90vh] left-[50%] translate-x-[-50%] overflow-hidden cursor-pointer"
        >
          <p className="text-orange-400 block">Scroll down</p>
          <Image
            className="w-6 animate-bounce"
            src={arrowDown}
            alt="arrow down"
          ></Image>
        </section>
      ) : null}
    </>
  )
}
