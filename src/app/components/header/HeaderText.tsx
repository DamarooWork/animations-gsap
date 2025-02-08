'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function HeaderText() {
  const headerText = useRef<HTMLHeadingElement>(null)
  const spanText = useRef<HTMLElement>(null)
  useGSAP(
    () => {
      gsap.from(spanText.current, {
        delay: 1,
        yPercent: 100,
        duration: 1,
        ease: 'none',
      })
      gsap.to(headerText.current, {
        delay: 2,
        duration: 0,
        overflow: 'visible',
      })
      gsap.to(headerText.current, {
        scrollTrigger: {
          trigger: headerText.current,
          end: '20% 50%',
          endTrigger: '#gsapCircles',
          toggleActions: 'play pause resume reset',
        },
        delay: 2,
        scale: '1.1',
        duration: 2,
        repeat: -1,
        ease: 'power2.inOut',
        yoyo: true,
      })
    },
    { scope: headerText }
  )
  return (
    <h1
      ref={headerText}
      className="text-6xl overflow-hidden text-orange-400 text-center"
    >
      <span ref={spanText} className="block will-change-transform">
        Damaroo's animated world
      </span>
    </h1>
  )
}
