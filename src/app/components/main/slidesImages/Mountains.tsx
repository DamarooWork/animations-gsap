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
  { src: mountain1, alt: 'mountain1' },
  { src: mountain2, alt: 'mountain2' },
  { src: mountain3, alt: 'mountain3' },
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
          duration: 2,
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
          duration: 1,
          x: () => '+=' + window.innerWidth / 5,
          rotateZ: 30,
          ease: 'power2.inOut',
        },
        '>-0.8'
      )
      tlPanel1.to('#mountain1', {
        rotateZ: 0,
        duration: 1,
        maxHeight: () => window.innerHeight,
        ease: 'power2.inOut',
      })
      tlPanel1.to(
        '#mountain2',
        {
          rotateZ: 0,
          duration: 1,
          maxHeight: () => window.innerHeight / 2,
          ease: 'power2.inOut',
        },
        '>-0.8'
      )
      tlPanel1.to('#mountain1', {
        duration: 1,
        top: 0,
        left: 0,
        x: 0,
        width: () => window.innerWidth / 3,
        height: () => window.innerHeight,
        borderRadius: '0',
        ease: 'power2.inOut',
      })
      tlPanel1.to('#mountain2', {
        duration: 1,
        top: 0,
        left: () => window.innerWidth / 3,
        x: 0,
        borderRadius: '0',
        ease: 'power2.inOut',
      })
      tlPanel1.to(
        '#mountain3',
        {
          duration: 1,
          top: 0,
          right: 0,
          x: 0,
          maxHeight: () => window.innerHeight,
          height: () => window.innerHeight,
          width: () => window.innerWidth / 3,
          borderRadius: '0',
          ease: 'power2.inOut',
        },
        '>-0.5'
      )
      tlPanel1.to(
        '#mountain2',
        {
          duration: 1,
          width: () => window.innerWidth / 3 + 1,
          maxHeight: () => window.innerHeight,
          height: () => window.innerHeight,
          ease: 'expo.in',
        },
        '>-0.8'
      )
    },
    { scope: mountains }
  )
  return (
    <article
      ref={mountains}
      className="slideImages min-w-[100vw]  h-screen relative flex justify-center items-center text-4xl gap-10 overflow-hidden bg-stone-300/80"
    >
      {mountainsArr.map((mountain) => {
        return (
          <Image
            key={mountain.alt}
            id={mountain.alt}
            loading="lazy"
            className="w-auto absolute max-h-[70vh] object-cover rounded-2xl"
            src={mountain.src}
            alt={mountain.alt}
          />
        )
      })}
    </article>
  )
}
