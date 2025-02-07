'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

import Image from 'next/image'
import img1 from '@/../public/images/thirdBox/1.jpg'
import img2 from '@/../public/images/thirdBox/2.jpg'
import img3 from '@/../public/images/thirdBox/3.jpg'

export default function Mountains(){

  return (
    <article
    className="thirdPanel panel1 relative  flex justify-center items-center
   text-4xl px-10 py-12 gap-10 min-w-[100vw] h-[100vh] overflow-hidden bg-stone-300/80"
  >
    <Image
      id="img1"
      loading="lazy"
      className="w-auto max-w-[20vw]  absolute max-h-[70vh] object-cover rounded-2xl"
      src={img1}
      alt="img1"
    />
    <Image
      id="img2"
      loading="lazy"
      className="w-auto max-w-[20vw] absolute max-h-[70vh] object-cover rounded-2xl"
      src={img2}
      alt="img2"
    />
    <Image
      id="img3"
      loading="lazy"
      className="w-auto max-w-[20vw]  absolute max-h-[80vh] object-cover rounded-2xl"
      src={img3}
      alt="img3"
    />
  </article>
  )
}