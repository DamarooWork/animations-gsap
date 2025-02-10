'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Curtain() {
  const curtain = useRef<HTMLDivElement>(null)
  const spanText = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.to(spanText.current, {
        delay: 0.2,
        yPercent: -100,
        duration: 1,
        ease: 'none',
      })

      gsap.to(spanText.current, {
        delay: 1.4,
        duration: 0.4,
        opacity: 0,
      })
      gsap.to(curtain.current, {
        delay: 1.8,
        yPercent: -100,
        duration: 0.6,
        ease: 'none',
      })
    },
    { scope: curtain }
  )
  return (
    <div
      ref={curtain}
      className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center text-6xl text-orange-400"
    >
      <div className="overflow-hidden text-center ">
        <span
          ref={spanText}
          className="block translate-y-[100%]  will-change-transform"
        >
          Damaroo
        </span>
      </div>
    </div>
  )
}
