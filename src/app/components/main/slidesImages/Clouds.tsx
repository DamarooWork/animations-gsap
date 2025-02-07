'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

import Image from 'next/image'
import cloudH1 from '@/../public/images/slidesImages/clouds/hor1.jpg'
import cloudH2 from '@/../public/images/slidesImages/clouds/hor2.jpg'
import cloudH3 from '@/../public/images/slidesImages/clouds/hor3.jpg'
import cloudH4 from '@/../public/images/slidesImages/clouds/hor4.jpg'
import cloudH5 from '@/../public/images/slidesImages/clouds/hor5.jpg'
import cloudH6 from '@/../public/images/slidesImages/clouds/hor6.jpg'
import cloudV1 from '@/../public/images/slidesImages/clouds/vert3.jpg'
import cloudV2 from '@/../public/images/slidesImages/clouds/vert2.jpg'
import cloudV3 from '@/../public/images/slidesImages/clouds/vert4.jpg'
export default function Clouds() {
  const clouds = useRef(null)
  useGSAP(
    () => {
      const tlClouds = gsap.timeline({
        scrollTrigger: {
          trigger: clouds.current,
          start: () => '+=' + window.innerWidth / 2,
        },
        ease: 'power1.inOut',
      })
      tlClouds.from('#cloudV3', {
        duration: 3,
        scale: 0,
        opacity: 0,
        x: 400,
      })
      tlClouds.from(
        '#cloudH5',
        {
          duration: 2.5,
          scale: 0,
          opacity: 0,
          x: 200,
          y: 200,
        },
        '>-2.5'
      )
      tlClouds.from(
        '#cloudH6',
        {
          duration: 2.5,
          scale: 0,
          opacity: 0,
          x: 200,
          y: -200,
        },
        '>-2'
      )
      tlClouds.from(
        '#cloudV1',
        {
          duration: 2,
          scale: 0,
          opacity: 0,
          x: 200,
          y: -200,
        },
        '>-2'
      )
      tlClouds.from(
        '#cloudV2',
        {
          duration: 2,
          scale: 0,
          opacity: 0,
          x: 200,
          y: -200,
        },
        '>-1.5'
      )
      tlClouds.from(
        '#cloudH1',
        {
          duration: 2,
          scale: 0,
          opacity: 0,
          x: -200,
          y: 200,
        },
        '>-1.5'
      )
      tlClouds.from(
        '#cloudH4',
        {
          duration: 2,
          scale: 0,
          opacity: 0,
          x: -200,
          y: -200,
        },
        '>-1.5'
      )
      tlClouds.from(
        '#cloudH2',
        {
          duration: 2,
          scale: 0,
          opacity: 0,
          x: -200,
          y: -200,
        },
        '>-1.5'
      )
      tlClouds.from(
        '#cloudH3',
        {
          duration: 2,
          scale: 0,
          opacity: 0,
          x: -200,
          y: -200,
        },
        '>-1.5'
      )
      tlClouds.to('#textClouds', {
        text: '#clouds',
        duration: 2,
        ease: 'none',
      })
    },
    { scope: clouds }
  )
  return (
    <article
      ref={clouds}
      id="clouds"
      className="slideImages relative grid grid-flow-col grid-rows-4 grid-cols-6 gap-0 overflow-hidden  min-w-[100vw] h-[100vh] bg-red-500/50"
    >
      <Image
        id="cloudH1"
        loading="lazy"
        className="object-cover w-full h-full"
        src={cloudH1}
        alt="cloudH1"
      />
      <Image
        id="cloudH2"
        loading="lazy"
        className="object-cover  w-full h-full"
        src={cloudH2}
        alt="cloudH2"
      />
      <Image
        id="cloudH3"
        loading="lazy"
        className="object-cover w-full h-full"
        src={cloudH3}
        alt="cloudH3"
      />
      <Image
        id="cloudH4"
        loading="lazy"
        className="object-cover w-full h-full"
        src={cloudH4}
        alt="cloudH4"
      />
      <Image
        id="cloudV1"
        loading="lazy"
        className=" row-span-2 object-cover w-full h-full  "
        src={cloudV1}
        alt="cloudV1"
      />
      <Image
        id="cloudV2"
        loading="lazy"
        className=" row-span-2 object-cover w-full h-full "
        src={cloudV2}
        alt="cloudV2"
      />
      <Image
        id="cloudH5"
        loading="lazy"
        className=" row-span-2 col-span-2 object-cover w-full h-full "
        src={cloudH5}
        alt="cloudH5"
      />
      <Image
        id="cloudH6"
        loading="lazy"
        className=" row-span-2 col-span-2 object-cover  w-full h-full  "
        src={cloudH6}
        alt="cloudH6"
      />
      <Image
        id="cloudV3"
        loading="lazy"
        className="row-span-4 col-span-2 object-cover w-full h-full "
        src={cloudV3}
        alt="cloudV3"
      />
      <p
        id="textClouds"
        className="text-6xl
     text-orange-400 italic font-semibold absolute
      top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      ></p>
    </article>
  )
}
