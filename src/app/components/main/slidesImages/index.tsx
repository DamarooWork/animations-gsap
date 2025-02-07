'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

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
import cloudH1 from '@/../public/images/thirdBox/clouds/hor1.jpg'
import cloudH2 from '@/../public/images/thirdBox/clouds/hor2.jpg'
import cloudH3 from '@/../public/images/thirdBox/clouds/hor3.jpg'
import cloudH4 from '@/../public/images/thirdBox/clouds/hor4.jpg'
import cloudV1 from '@/../public/images/thirdBox/clouds/vert1.jpg'
import cloudV2 from '@/../public/images/thirdBox/clouds/vert2.jpg'


export default function SlidesImages() {
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
      tlPanel1.fromTo(
        '#img1',
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
        '#img2',
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
      const tlCars = gsap.timeline({
        scrollTrigger: {
          trigger: '#cars',
          start: '30% 0',
        },
      })
      tlCars.fromTo(
        '#img4',
        { opacity: 0, scale: 0.2 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          x: () => '+=' + window.innerWidth / 3,
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
          x: () => '+=' + window.innerWidth / 6,
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
          x: () => '-=' + window.innerWidth / 6,
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
          x: () => '-=' + window.innerWidth / 3,
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
        duration: 2,
        scale: 0,
        opacity: 0,
        x: 400,
      })
      tlClouds.from('#img13', {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        x: 200,
        y: 200,
      })
      tlClouds.from('#img14', {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        x: 200,
        y: -200,
      })
      tlClouds.from('#cloudV1', {
        duration: 1,
        scale: 0,
        opacity: 0,
        x: 200,
        y: -200,
      })
      tlClouds.from('#cloudV2', {
        duration: 1,
        scale: 0,
        opacity: 0,
        x: 200,
        y: -200,
      })
      tlClouds.from('#cloudH1', {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        x: -200,
        y: 200,
      })
      tlClouds.from('#cloudH4', {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        x: -200,
        y: -200,
      })
      tlClouds.from('#cloudH2', {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        x: -200,
        y: -200,
      })
      tlClouds.from('#cloudH3', {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        x: -200,
        y: -200,
      })
      tlClouds.to('#textClouds', {
        text: '#clouds',
        duration: 3,
        ease: 'none',
      })
      const tlPhotos = gsap.timeline({
        scrollTrigger: {
          trigger: '#photos',
          start: () => '+=' + (window.innerWidth * 3) / 4,
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
    <article
      ref={thirdElem}
      id="thirdElem"
      className=" flex flex-row-reverse  h-[100vh]"
    >
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
      <article
        id="cars"
        className="thirdPanel relative flex justify-center items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] overflow-hidden bg-green-400/50"
      >
        <Image
          id="img4"
          loading="lazy"
          className="w-auto absolute hover:z-50  max-w-[15vw]  max-h-[70vh] object-cover rounded-2xl"
          src={img4}
          alt="img4"
        />
        <Image
          id="img5"
          loading="lazy"
          className="w-auto absolute hover:z-50 max-w-[15vw] max-h-[70vh] object-cover rounded-2xl"
          src={img5}
          alt="img5"
        />

        <Image
          id="img10"
          loading="lazy"
          className="w-auto z-20 absolute hover:z-50 max-w-[15vw] max-h-[70vh] object-cover rounded-2xl"
          src={img10}
          alt="img10"
        />
        <Image
          id="img11"
          loading="lazy"
          className="w-auto z-10 absolute hover:z-50 max-w-[15vw] max-h-[70vh] object-cover rounded-2xl"
          src={img11}
          alt="img11"
        />
        <Image
          id="img12"
          loading="lazy"
          className="w-auto absolute hover:z-50 max-w-[15vw] max-h-[70vh] object-cover rounded-2xl"
          src={img12}
          alt="img12"
        />
      </article>
      <article
        id="clouds"
        className="thirdPanel relative grid grid-flow-col
         grid-rows-4 grid-cols-6 
         gap-0 overflow-hidden  min-w-[100vw] h-[100vh]
        bg-red-500/50"
      >
        <Image
          id="cloudH1"
          loading="lazy"
          className="object-cover w-full h-full  "
          src={cloudH1}
          alt="cloudH1"
        />
        <Image
          id="cloudH2"
          loading="lazy"
          className="object-cover  w-full h-full "
          src={cloudH2}
          alt="cloudH2"
        />
        <Image
          id="cloudH3"
          loading="lazy"
          className="object-cover w-full h-full "
          src={cloudH3}
          alt="cloudH3"
        />
        <Image
          id="cloudH4"
          loading="lazy"
          className="object-cover w-full h-full   "
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
          id="img13"
          loading="lazy"
          className=" row-span-2 col-span-2 object-cover w-full h-full "
          src={img13}
          alt="img13"
        />
        <Image
          id="img14"
          loading="lazy"
          className=" row-span-2 col-span-2 object-cover  w-full h-full  "
          src={img14}
          alt="img14"
        />
        <Image
          id="img15"
          loading="lazy"
          className="row-span-4 col-span-2 object-cover w-full h-full "
          src={img15}
          alt="img15"
        />
        <p
          id="textClouds"
          className="text-6xl
         text-orange-400 italic font-semibold absolute
          top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        ></p>
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
    </article>
  )
}
