'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

import Image from 'next/image'
import car1 from '@/../public/images/slidesImages/cars/1.jpg'
import car2 from '@/../public/images/slidesImages/cars/2.jpg'
import car3 from '@/../public/images/slidesImages/cars/3.jpg'
import car4 from '@/../public/images/slidesImages/cars/4.jpg'
import car5 from '@/../public/images/slidesImages/cars/5.jpg'

const carsArr: IImage[] = [
  { src: car1, alt: 'car1' },
  { src: car2, alt: 'car2' },
  { src: car3, alt: 'car3' },
  { src: car4, alt: 'car4' },
  { src: car5, alt: 'car5' },
]
export default function Cars() {
  const cars = useRef(null)
  const carsRefs = useRef<HTMLImageElement[]>([])
  useGSAP(
    () => {
      const tlCars = gsap.timeline({
        scrollTrigger: {
          trigger: cars.current,
          start: '+=' + window.innerWidth / 4,
        },
      })
      tlCars.fromTo(
        '#car1',
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
        '#car2',
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
        '#car3',
        { opacity: 0, scale: 0.2 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
        }
      )
      tlCars.fromTo(
        '#car4',
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
        '#car5',
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
      carsRefs.current.forEach((carNode, i) => {
        tlCars.to(
          carNode,
          {
            top: 0,
            left: () => (window.innerWidth / carsRefs.current.length) * i,
            duration: 2,
            rotateZ: 0,
            ease: 'power2.inOut',
            maxWidth: () => window.innerWidth,
            maxHeight: () => window.innerHeight,
            width: () => window.innerWidth / carsRefs.current.length,
            height: () => window.innerHeight,
            translateX: 0,
            borderRadius: 0,
          },
          i === 0 ? '>-0' : '>-2'
        )
      })
    },
    { scope: cars }
  )
  return (
    <article
      ref={cars}
      id="cars"
      className="slideImages relative min-w-[100vw] h-screen flex justify-center items-center text-4xl px-10 py-12  overflow-hidden bg-green-400/50"
    >
      {carsArr.map((car, i) => {
        return (
          <Image
            ref={(node) => {
              if (node) {
                carsRefs.current[i] = node
              }
            }}
            key={car.alt}
            id={car.alt}
            loading="lazy"
            className={`w-auto absolute ${
              i === 2 ? 'z-20' : i === 3 ? 'z-10' : ''
            } hover:z-50  max-w-[15vw]  max-h-[70vh] object-cover rounded-2xl`}
            src={car.src}
            alt={car.alt}
          />
        )
      })}
    </article>
  )
}
