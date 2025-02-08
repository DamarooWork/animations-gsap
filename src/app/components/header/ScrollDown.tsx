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
  const elem = useRef(null)
  useEffect(() => {
    setShow(window.scrollY)
    window.addEventListener('scroll', () => setShow(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => setShow(window.scrollY))
    }
  }, [])
  useGSAP(
    () => {
      gsap.from(elem.current, {
        delay: 1,
        yPercent: 100,
        duration: 1,
        ease: 'none',
      })
    },
    { scope: elem }
  )
  return (
    <>
      {show < 300 ? (
        <section
          ref={scrollDown}
          className="flex flex-col items-center gap-2 text-2xl fixed top-[80vh] lg:top-[90vh] left-[50%] translate-x-[-50%] overflow-hidden"
        >
          <p ref={elem} className="text-orange-400 block">
            Scroll down
          </p>
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
