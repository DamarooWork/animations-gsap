'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)
export default function Header() {
  const headerText = useRef<HTMLHeadingElement>(null)
  useGSAP(() => {
    gsap.to(headerText.current, {
      scale: '1.1',
      color: 'green',
      duration: 3,
      repeat: -1,
      ease: 'power1.inOut',
      yoyo: true,
    })
  }, {})
  return (
    <header className="mt-40  w-full ">
      <h1
        ref={headerText}
        className="text-6xl m-auto max-w-[600px] text-center will-change-transform"
      >
        Welcome to animated world!
      </h1>
    </header>
  )
}
