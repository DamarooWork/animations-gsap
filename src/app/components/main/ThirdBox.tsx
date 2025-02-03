'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

import yuki1 from '../../../../public/images/yuki/1.jpg'

import yuki2 from '../../../../public/images/yuki/2.jpg'
import yuki3 from '../../../../public/images/yuki/3.jpg'
import yuki4 from '../../../../public/images/yuki/4.jpg'
import yuki5 from '../../../../public/images/yuki/5.jpg'
import yuki6 from '../../../../public/images/yuki/6.jpg'
import yuki7 from '../../../../public/images/yuki/7.jpg'
import yuki8 from '../../../../public/images/yuki/8.jpg'
import yuki9 from '../../../../public/images/yuki/9.jpg'
import yuki10 from '../../../../public/images/yuki/10.jpg'

gsap.registerPlugin(useGSAP, ScrollTrigger)
export default function ThirdBox() {
  const thirdElem = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const sections = gsap.utils.toArray('.thirdPanel')
      gsap.to(sections, {
        xPercent: 100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: thirdElem.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + thirdElem.current?.offsetWidth,
        },
      })
      gsap.to('#img1', {
        scrollTrigger: {
          trigger: thirdElem.current,
        },
        duration: 3,
        x: -400,
        rotateZ: -30,
        ease: 'power2.inOut',
      })
      gsap.to('#img2', {
        scrollTrigger: {
          trigger: thirdElem.current,
        },
        duration: 3,
        x: 400,
        rotateZ: 30,
        ease: 'power2.inOut',
      })
      gsap.to('#img4', {
        scrollTrigger: {
          trigger: '#img4',
          start: () => '+=' + window.innerWidth / 4,
        },
        duration: 3,
        x: 400,
        rotateZ: 40,
        rotateX: 360,
        rotateY: 360,
        ease: 'power2.inOut',
      })
      gsap.to('#img5', {
        scrollTrigger: {
          trigger: '#img4',
          start: () => '+=' + window.innerWidth / 4,
        },
        duration: 3,
        x: -400,
        rotateZ: -40,
        rotateX: -360,
        rotateY: -360,
        ease: 'power2.inOut',
      })
      gsap.to('#img6', {
        scrollTrigger: {
          trigger: '#img6',
          start: () => '+=' + window.innerWidth / 2,
        },
        duration: 5,
        x: -200,
        rotate: 720,

        ease: 'power3.inOut',
      })
    },
    { scope: thirdElem }
  )
  return (
    <section
      ref={thirdElem}
      id="thirdElem"
      className=" flex flex-row-reverse  h-[100vh]"
    >
      <article
        className="thirdPanel panel1 relative  flex justify-center items-center
       text-4xl px-10 py-12 gap-10 min-w-[100vw] h-[100vh] bg-orange-500"
      >
        <Image
          id="img1"
          loading="lazy"
          className="w-auto absolute h-[70vh] object-cover rounded-2xl"
          src={yuki1}
          alt="Yuki1"
        />
        <Image
          id="img2"
          loading="lazy"
          className="w-auto absolute h-[70vh] object-cover rounded-2xl"
          src={yuki2}
          alt="Yuki2"
        />
        <Image
          id="img3"
          loading="lazy"
          className="w-auto absolute h-[80vh] object-cover rounded-2xl"
          src={yuki3}
          alt="Yuki3"
        />
      </article>
      <article
        className="thirdPanel relative flex justify-center items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] bg-violet-500"
      >
        <Image
          id="img4"
          loading="lazy"
          className="w-auto absolute max-h-[70vh] object-cover rounded-2xl"
          src={yuki4}
          alt="Yuki4"
        />
        <Image
          id="img5"
          loading="lazy"
          className="w-auto absolute max-h-[70vh] object-cover rounded-2xl"
          src={yuki5}
          alt="Yuki5"
        />
      </article>
      <article
        className="thirdPanel flex justify-center items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] bg-red-500"
      >
        <Image
          id="img6"
          loading="lazy"
          className="w-auto max-h-[90vh] object-cover rounded-2xl"
          src={yuki6}
          alt="Yuki6"
        />
      </article>
      <article
        className="thirdPanel flex justify-center items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] bg-blue-500"
      >
        <figure id="img7">
          <Image
            loading="lazy"
            className="w-auto max-h-[80vh] object-cover rounded-2xl"
            src={yuki7}
            alt="Yuki7"
          />
          <figcaption className="text-center">Юки-чао кушаец</figcaption>
        </figure>
      </article>
    </section>
  )
}
