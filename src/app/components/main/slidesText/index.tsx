'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)
export default function SlidesText() {
  const slidesText = useRef<HTMLElement>(null)
  useGSAP(
    () => {
      const sections = gsap.utils.toArray('.slide')
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slidesText.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + slidesText.current?.offsetWidth,
        },
      })
    },
    { scope: slidesText }
  )
  return (
    <article
      ref={slidesText}
      id="slidesText"
      className="mt-[20vh] text-2xl sm:text-4xl lg:text-5xl xl:text-6xl lg:leading-[1.5] overflow-hidden flex  h-[100vh] "
    >
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
    </article>
  )
}
