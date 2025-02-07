'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

import Image from 'next/image'
import mountain1 from '@/../public/images/slidesImages/mountains/1.jpg'
import mountain2 from '@/../public/images/slidesImages/mountains/2.jpg'
import mountain3 from '@/../public/images/slidesImages/mountains/3.jpg'

const mountainsArr: IImage[] = [
  { url: mountain1, alt: 'mountain1' },
  { url: mountain2, alt: 'mountain2' },
  { url: mountain3, alt: 'mountain3' },
]
export default function Mountains() {
  const mountains = useRef(null)
  useGSAP(
    () => {
      const tlPanel1 = gsap.timeline({
        scrollTrigger: {
          trigger: mountains.current,
          snap: 1 / 2,
          end: () => '+=' + window.innerHeight,
        },
        ease: 'none',
      })
      tlPanel1.fromTo(
        '#mountain1',
        {
          opacity: 0,
          scale: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          x: () => '-=' + window.innerWidth / 5,
          rotateZ: -30,
          ease: 'power2.inOut',
        }
      )
      tlPanel1.fromTo(
        '#mountain2',
        {
          opacity: 0,
          scale: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          x: () => '+=' + window.innerWidth / 5,
          rotateZ: 30,
          ease: 'power2.inOut',
        }
      )
    },
    { scope: mountains }
  )
  return (
    <article
      ref={mountains}
      className="slideImages relative flex justify-center items-center
   text-4xl px-10 py-12 gap-10 min-w-[100vw] h-[100vh] overflow-hidden bg-stone-300/80"
    >
      {mountainsArr.map((mountain) => {
        return (
          <Image
            key={mountain.alt}
            id={mountain.alt}
            loading="lazy"
            className="w-auto max-w-[20vw]  absolute max-h-[70vh] object-cover rounded-2xl"
            src={mountain.url}
            alt={mountain.alt}
          />
        )
      })}
    </article>
  )
}
