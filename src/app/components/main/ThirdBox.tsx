'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

import img1 from '@/../public/images/thirdBox/1.jpg'
import img2 from '@/../public/images/thirdBox/2.jpg'
import img3 from '@/../public/images/thirdBox/3.jpg'
import img4 from '@/../public/images/thirdBox/4.jpg'
import img5 from '@/../public/images/thirdBox/5.jpg'
import img6 from '@/../public/images/thirdBox/6.jpg'
import img7 from '@/../public/images/thirdBox/7.jpg'
import img8 from '@/../public/images/thirdBox/8.jpg'
import img9 from '@/../public/images/thirdBox/9.jpg'
import img10 from '@/../public/images/thirdBox/10.jpg'
import img11 from '@/../public/images/thirdBox/11.jpg'
import img12 from '@/../public/images/thirdBox/12.jpg'
import img13 from '@/../public/images/thirdBox/13.jpg'
import img14 from '@/../public/images/thirdBox/14.jpg'
import img15 from '@/../public/images/thirdBox/15.jpg'
import img16 from '@/../public/images/thirdBox/16.jpg'

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
      const tlPanel1 = gsap.timeline({
        scrollTrigger: {
          trigger: thirdElem.current,
          snap: 1 / 2,
          end: () => '+=' + thirdElem.current?.offsetHeight,
        },
        ease: 'none',
      })
      gsap.fromTo(
        '#img1',
        {
          opacity: 0,
          scale: 0,
        },
        {
          scrollTrigger: {
            trigger: thirdElem.current,
          },
          scale: 1,
          opacity: 1,
          duration: 3,
          x: -400,
          rotateZ: -30,
          ease: 'power2.inOut',
        }
      )
      gsap.fromTo(
        '#img2',
        {
          opacity: 0,
          scale: 0,
        },
        {
          scrollTrigger: {
            trigger: thirdElem.current,
          },
          delay: 1,
          scale: 1,
          opacity: 1,
          duration: 3,
          x: 400,
          rotateZ: 30,
          ease: 'power2.inOut',
        }
      )
      const tlCars = gsap.timeline({
        scrollTrigger: {
          trigger: '#img4',
          start: '#img4',
        },
      })
      tlCars.fromTo(
        '#img4',
        { opacity: 0, scale: 0.2 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          x: 600,
          rotateZ: 20,
          ease: 'power2.inOut',
        }
      )
      tlCars.fromTo(
        '#img5',
        { opacity: 0, scale: 0.2 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          x: 300,
          rotateZ: 10,
          ease: 'power2.inOut',
        }
      )
      tlCars.fromTo(
        '#img10',
        { opacity: 0, scale: 0.2 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          y: -20,
          ease: 'power2.inOut',
        }
      )
      tlCars.fromTo(
        '#img11',
        { opacity: 0, scale: 0.2 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          x: -300,
          rotateZ: -10,
          ease: 'power2.inOut',
        }
      )
      tlCars.fromTo(
        '#img12',
        { opacity: 0, scale: 0.2 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          x: -600,
          rotateZ: -20,
          ease: 'power2.inOut',
        }
      )
      const tlClouds = gsap.timeline({
        scrollTrigger: {
          trigger: '#clouds',
          start: () => '+=' + window.innerWidth / 2,
        },
        ease: 'power1.inOut',
      })
      tlClouds.from('#img15', {
        duration: 1,
        scale: 0,
        opacity: 0,
        x: -400,
      })
      tlClouds.from('#img13', {
        duration: 1,
        scale: 0,
        opacity: 0,
        x: 200,
        y: 200,
      })
      tlClouds.from('#img14', {
        duration: 1,
        scale: 0,
        opacity: 0,
        x: 200,
        y: -200,
      })
      const tlPhotos = gsap.timeline({
        scrollTrigger: {
          trigger: '#photos',
          start: () => '+=' + (window.innerWidth * 3) / 4,
          markers: true,
        },
        ease: 'power1.inOut',
      })
      tlPhotos.from('#img7', {
        delay: 1.5,
        display: 'absolute',
        duration: 1,
        rotateZ: -20,
        scale: 0.2,

        y: () => '+=' + window.innerHeight / 2,
        x: () => '+=' + window.innerWidth / 4,
      })
      tlPhotos.from('#img8', {
        display: 'absolute',
        duration: 1,
        rotateZ: -10,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '+=' + window.innerWidth / 3,
      })
      tlPhotos.from('#img9', {
        display: 'absolute',
        duration: 1,
        rotateZ: 0,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: 0,
      })
      tlPhotos.from('#img6', {
        display: 'absolute',
        duration: 1,
        rotateZ: 20,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '-=' + window.innerWidth / 3,
      })
      tlPhotos.from('#img16', {
        display: 'absolute',
        duration: 1,
        rotateZ: 10,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '-=' + window.innerWidth / 4,
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
       text-4xl px-10 py-12 gap-10 min-w-[100vw] h-[100vh] bg-stone-300/80"
      >
        <Image
          id="img1"
          loading="lazy"
          className="w-auto  absolute h-[70vh] object-cover rounded-2xl"
          src={img1}
          alt="img1"
        />
        <Image
          id="img2"
          loading="lazy"
          className="w-auto absolute h-[70vh] object-cover rounded-2xl"
          src={img2}
          alt="img2"
        />
        <Image
          id="img3"
          loading="lazy"
          className="w-auto absolute h-[80vh] object-cover rounded-2xl"
          src={img3}
          alt="img3"
        />
      </article>
      <article
        className="thirdPanel relative flex justify-center items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] bg-green-400/50"
      >
        <Image
          id="img4"
          loading="lazy"
          className="w-auto absolute hover:z-50  max-h-[70vh] object-cover rounded-2xl"
          src={img4}
          alt="img4"
        />
        <Image
          id="img5"
          loading="lazy"
          className="w-auto absolute hover:z-50 max-h-[70vh] object-cover rounded-2xl"
          src={img5}
          alt="img5"
        />

        <Image
          id="img10"
          loading="lazy"
          className="w-auto z-20 absolute hover:z-50 max-h-[70vh] object-cover rounded-2xl"
          src={img10}
          alt="img10"
        />
        <Image
          id="img11"
          loading="lazy"
          className="w-auto z-10 absolute hover:z-50 max-h-[70vh] object-cover rounded-2xl"
          src={img11}
          alt="img11"
        />
        <Image
          id="img12"
          loading="lazy"
          className="w-auto absolute hover:z-50 max-h-[70vh] object-cover rounded-2xl"
          src={img12}
          alt="img12"
        />
      </article>
      <article
        id="clouds"
        className="thirdPanel grid grid-flow-col
         grid-rows-2 grid-cols-2 
       text-4xl px-10 py-12 gap-[10vh]  min-w-[100vw] h-[100vh]
        bg-red-500/50"
      >
        <Image
          id="img13"
          loading="lazy"
          className="w-auto max-h-[40vh] place-self-end  rounded-2xl"
          src={img13}
          alt="img13"
        />
        <Image
          id="img14"
          loading="lazy"
          className="w-auto max-h-[40vh] place-self-end   rounded-2xl"
          src={img14}
          alt="img14"
        />
        <Image
          id="img15"
          loading="lazy"
          className="w-auto row-span-2 self-start  max-h-[90vh]  rounded-2xl"
          src={img15}
          alt="img15"
        />
      </article>
      <article
        id="photos"
        className="thirdPanel relative flex justify-around items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] overflow-hidden bg-cyan-400/50"
      >
        <Image
          id="img7"
          loading="lazy"
          className="w-[18vw]  h-auto object-cover rounded-2xl"
          src={img7}
          alt="img7"
        />
        <Image
          id="img8"
          loading="lazy"
          className="w-[18vw]  h-auto object-cover rounded-2xl"
          src={img8}
          alt="img8"
        />
        <Image
          id="img9"
          loading="lazy"
          className="w-[18vw]  h-auto object-cover rounded-2xl"
          src={img9}
          alt="img9"
        />
        <Image
          id="img16"
          loading="lazy"
          className="w-[18vw]   h-auto object-cover rounded-2xl"
          src={img16}
          alt="img16"
        />
        <Image
          id="img6"
          loading="lazy"
          className="w-[18vw]  h-auto object-cover rounded-2xl"
          src={img6}
          alt="img6"
        />
      </article>
    </section>
  )
}
