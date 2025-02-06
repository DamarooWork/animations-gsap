'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(Flip, useGSAP, ScrollTrigger)

import Image from 'next/image'
import ocean1 from '@/../public/images/circles/1.jpg'
import ocean2 from '@/../public/images/circles/2.jpg'
import ocean3 from '@/../public/images/circles/3.jpg'
import ocean4 from '@/../public/images/circles/4.jpg'
import ocean5 from '@/../public/images/circles/5.jpg'

const imagesArr: IImage[] = [
  { url: ocean1, alt: 'ocean1' },
  { url: ocean2, alt: 'ocean2' },
  { url: ocean3, alt: 'ocean3' },
  { url: ocean4, alt: 'ocean4' },
  { url: ocean5, alt: 'ocean5' },
]
export default function OceanCircles() {
  const circlesComp = useRef<HTMLElement>(null)
  const imageRefs = useRef<HTMLImageElement[]>([])
  useGSAP(
    () => {
      imageRefs.current.forEach((element, i) => {
        let degPlus = 72 * i
        let degMinus = -1 * degPlus
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#images',
          },
          repeat: -1,

          ease: 'none',
          delay: 0,
        })
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vh) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 72
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vh) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 144
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vh) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 216
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vh) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 288
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vh) rotate(${degMinus}deg)`,
        })
        degPlus = 72 * i + 360
        degMinus = -1 * degPlus
        tl.to(element, {
          transform: `translate(-50%, -50%) rotate(${degPlus}deg)
           translate(30vh) rotate(${degMinus}deg)`,
        })
      })
    },
    { scope: circlesComp }
  )

  return (
    <article ref={circlesComp} className="mt-[20vh] mb-[10vh] ">
      <h2
        id="images"
        className="text-6xl text-center text-orange-400 italic font-semibold"
      >
        #OCEANS
      </h2>
      <section className="circles mt-[10vh] h-[90vh]  relative flex justify-center ">
        {imagesArr.map((img: IImage, i: number) => {
          return (
            <Image
              ref={(node) => {
                if (node) {
                  imageRefs.current[i] = node
                }
              }}
              key={img.alt}
              src={img.url}
              alt={img.alt}
              className="circle 
               absolute top-[50%] left-[50%] rounded-full
                w-[12vh] h-[12vh] lg:w-60 lg:h-60 object-cover"
            />
          )
        })}
      </section>
    </article>
  )
}
