'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRef } from 'react'
gsap.registerPlugin(useGSAP, ScrollToPlugin)

export default function Links() {
  const links = useRef<HTMLElement>(null)
  // gsap.from(links.current, {
  //   delay: 0.6,
  //   display: 'block',
  //   yPercent: 100,
  //   duration: 1,
  //   ease: 'none',
  // })
  function handleLinkClick(link: string) {
    gsap.to(window, { duration: 1, scrollTo: { y: link }, ease: 'power2' })
  }
  return (
    <nav
      ref={links}
      className="fixed text-xl z-40 top-10 left-10 flex flex-col gap-4 justify-start items-start text-orange-400 font-bold"
    >
      <button onClick={() => handleLinkClick('0')}>Home</button>
      <button onClick={() => handleLinkClick('#gsapCircles')}>
        GSAP Circles
      </button>
      <button onClick={() => handleLinkClick('#slidesText')}>
        What is GSAP?
      </button>
      <button onClick={() => handleLinkClick('#slidesImages')}>
        Animations with images
      </button>
      <button onClick={() => handleLinkClick('#oceanCircles')}>Oceans</button>
    </nav>
  )
}
