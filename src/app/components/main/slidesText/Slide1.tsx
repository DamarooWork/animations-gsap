'use client'
import { useRef } from 'react'
import useDeviceSize from '@/app/hooks/useDeviceSize'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin, Draggable)

import Image from 'next/image'
import dragIcon from '@/../public/icons/slidesText/slide1/dragIcon.png'
import skate from '@/../public/icons/slidesText/slide1/skate.png'
import rounded from '@/../public/icons/slidesText/slide1/rounded.png'
import number2 from '@/../public/icons/slidesText/slide1/number2.png'
import number4 from '@/../public/icons/slidesText/slide1/number4.png'
import plusIcon from '@/../public/icons/slidesText/slide1/plusIcon.png'
import equalIcon from '@/../public/icons/slidesText/slide1/equalIcon.png'
const equationArr: IImage[] = [
  { src: number2, alt: 'number 2' },
  { src: plusIcon, alt: 'plus icon' },
  { src: number2, alt: 'number 2' },
  { src: equalIcon, alt: 'equal icon' },
  { src: number4, alt: 'number 4' },
]
export default function Slide1() {
  const [width] = useDeviceSize()
  const slide1 = useRef(null)
  const dragIconRef = useRef<HTMLImageElement>(null)
  const skateRef = useRef<HTMLImageElement>(null)
  const roundedRef = useRef<HTMLImageElement>(null)

  const equationRefs = useRef<HTMLImageElement[]>([])

  useGSAP(
    () => {
      Draggable.create(dragIconRef.current, {
        bounds: slide1.current,
      })
      Draggable.create(skateRef.current, {
        type: 'x',
        bounds: slide1.current,
      })
      Draggable.create(roundedRef.current, {
        type: 'rotation',
        bounds: slide1.current,
      })
      equationRefs.current.forEach((elem) => {
        Draggable.create(elem, {
          bounds: slide1.current,
        })
        gsap.to(elem, {
          transform: 'translate(-50%)',
        })
      })
      const tlSlide1 = gsap.timeline({
        scrollTrigger: {
          trigger: slide1.current,
          snap: 1 / 2,
          end: () => '+=' + window.innerHeight,
        },
        ease: 'none',
      })
      tlSlide1.to('.text1', {
        text: "The gsap object serves as the access point for most of GSAP's functionality. ",
        duration: 3,
      })
      tlSlide1.to('.text2', {
        text: "It's just a generic object with various methods and properties that create and control Tweens and Timelines, two of the most important concepts to understand.",
        duration: 6,
      })
    },
    { scope: slide1 }
  )
  return (
    <section
      ref={slide1}
      className="slide relative max-lg:flex max-lg:flex-col max-lg:justify-center
   p-[10vw] min-w-[100vw] h-screen text-white bg-gradient-to-tl from-orange-300/80 to-orange-600/80"
    >
      <Image
        ref={dragIconRef}
        className="absolute bottom-4 left-10 w-24 h-auto"
        src={dragIcon}
        alt="Drag icon"
      />
      <Image
        ref={skateRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-auto"
        src={skate}
        alt="Skate icon"
      />
      <Image
        ref={roundedRef}
        className="absolute bottom-4 right-8 w-24 h-auto"
        src={rounded}
        alt="rounded icon"
      />
      {equationArr.map((elem, i) => {
        return (
          <Image
            key={i}
            style={{
              left:
                width > 640
                  ? `${i * 100 + width / 2 - 200}px`
                  : `${i * 50 + width / 2 - 100}px`,
            }}
            ref={(node) => {
              if (node) {
                equationRefs.current[i] = node
              }
            }}
            className={`absolute top-10    w-12 sm:w-24 h-auto`}
            src={elem.src}
            alt={elem.alt}
          />
        )
      })}
      <p className="text1 mb-[5vh]"></p>
      <p className="text2"></p>
    </section>
  )
}
