'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

import Image from 'next/image'
import img6 from '@/../public/images/thirdBox/6.jpg'
import img7 from '@/../public/images/thirdBox/7.jpg'
import img8 from '@/../public/images/thirdBox/8.jpg'
import img9 from '@/../public/images/thirdBox/9.jpg'
import img16 from '@/../public/images/thirdBox/16.jpg'

export default function People() {
  const people = useRef(null)
  useGSAP(
    () => {
      const tlPeople = gsap.timeline({
        scrollTrigger: {
          trigger: people.current,
          start: () => '+=' + (window.innerWidth * 3) / 4,
        },
        ease: 'power1.inOut',
      })
      tlPeople.from('#img7', {
        delay: 1.5,
        display: 'absolute',
        duration: 1,
        rotateZ: -20,
        scale: 0.2,

        y: () => '+=' + window.innerHeight / 2,
        x: () => '+=' + window.innerWidth / 4,
      })
      tlPeople.from('#img8', {
        display: 'absolute',
        duration: 1,
        rotateZ: -10,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '+=' + window.innerWidth / 3,
      })
      tlPeople.from('#img9', {
        display: 'absolute',
        duration: 1,
        rotateZ: 0,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: 0,
      })
      tlPeople.from('#img6', {
        display: 'absolute',
        duration: 1,
        rotateZ: 20,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '-=' + window.innerWidth / 3,
      })
      tlPeople.from('#img16', {
        display: 'absolute',
        duration: 1,
        rotateZ: 10,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '-=' + window.innerWidth / 4,
      })
    },
    { scope: people }
  )
  return (
    <article
      ref={people}
      id="people"
      className="slideImages relative flex justify-around items-center text-4xl px-10 py-12  min-w-[100vw] h-[100vh] overflow-hidden bg-cyan-400/50"
    >
      <Image
        id="img7"
        loading="lazy"
        className="w-[18vw] h-auto object-cover rounded-2xl"
        src={img7}
        alt="img7"
      />
      <Image
        id="img8"
        loading="lazy"
        className="w-[18vw] h-auto object-cover rounded-2xl"
        src={img8}
        alt="img8"
      />
      <Image
        id="img9"
        loading="lazy"
        className="w-[18vw] h-auto object-cover rounded-2xl"
        src={img9}
        alt="img9"
      />
      <Image
        id="img16"
        loading="lazy"
        className="w-[18vw] h-auto object-cover rounded-2xl"
        src={img16}
        alt="img16"
      />
      <Image
        id="img6"
        loading="lazy"
        className="w-[18vw] h-auto object-cover rounded-2xl"
        src={img6}
        alt="img6"
      />
    </article>
  )
}
