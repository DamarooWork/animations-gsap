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
      duration: 2,
      repeat: -1,
      ease: 'power2.inOut',
      yoyo: true,
    })
  }, {})
  return (
    <header className="  w-full h-[100vh] flex justify-center items-center ">
      <h1
        ref={headerText}
        className="text-6xl text-orange-400 text-center will-change-transform"
      >
        Welcome to animated world!
      </h1>
    </header>
  )
}
