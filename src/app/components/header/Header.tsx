'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(useGSAP, TextPlugin)
gsap.registerPlugin(useGSAP)
export default function Header() {
  const headerText = useRef<HTMLHeadingElement>(null)
  useGSAP(() => {
    gsap.to(headerText.current, {
      scale: '1.1',
      color: 'red',
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
        className="text-4xl m-auto w-[400px] text-center will-change-transform"
      >
        Welcome to animated world!
      </h1>
    </header>
  )
}
