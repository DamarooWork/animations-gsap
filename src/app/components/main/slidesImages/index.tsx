'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

import Mountains from './Mountains'
import Clouds from './Clouds'
import People from './People'
import Cars from './Cars'

export default function SlidesImages() {
  const slidesImages = useRef<HTMLElement>(null)
  useGSAP(
    () => {
      const sections = gsap.utils.toArray('.slideImages')
      gsap.to(sections, {
        xPercent: 100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slidesImages.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + slidesImages.current?.offsetWidth,
        },
      })
    },
    { scope: slidesImages }
  )
  return (
    <article
      ref={slidesImages}
      id="slidesImages"
      className="flex flex-row-reverse"
    >
      <Mountains />
      <Cars />
      <Clouds />
      <People />
    </article>
  )
}
