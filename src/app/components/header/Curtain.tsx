'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Curtain() {
  const curtain = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.to(curtain.current, {
        delay: 0.1,
        yPercent: -100,
        duration: 0.5,
        ease: 'none',
      })
    },
    { scope: curtain }
  )
  return (
    <div
      ref={curtain}
      className="fixed top-0 left-0 w-full h-full bg-black"
    ></div>
  )
}
