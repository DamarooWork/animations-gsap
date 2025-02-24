'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(Flip, useGSAP, ScrollTrigger)

export default function Circles({ images }: { images: IImage[] }) {
  const circlesComp = useRef<HTMLElement>(null)
  const imageRefs = useRef<HTMLImageElement[]>([])
  useGSAP(
    () => {
      imageRefs.current.forEach((element, i) => {
        let degPlus = 72 * i
        let degMinus = -1 * degPlus
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: circlesComp.current,
            toggleActions: 'play pause resume reset',
          },
          repeat: -1,
          ease: 'power3.inOut',
        })
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vmin) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 72
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vmin) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 144
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vmin) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 216
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vmin) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 288
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vmin) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 360
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vmin) rotate(${degMinus}deg)`,
        })
      })
    },
    { scope: circlesComp }
  )
  return (
    <section
      ref={circlesComp}
      className="circles mt-[10vh] h-[90vh] relative flex justify-center"
    >
      {images.map((img: IImage, i: number) => {
        return (
          <Image
            ref={(node) => {
              if (node) {
                imageRefs.current[i] = node
              }
            }}
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className="absolute top-[50%] left-[50%] rounded-full w-[12vh] h-[12vh] lg:w-60 lg:h-60 object-cover"
          />
        )
      })}
    </section>
  )
}
