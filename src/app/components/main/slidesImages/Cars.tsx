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
  { url: car1, alt: 'car1' },
  { url: car2, alt: 'car2' },
  { url: car3, alt: 'car3' },
  { url: car4, alt: 'car4' },
  { url: car5, alt: 'car5' },
]
export default function Cars() {
  const cars = useRef(null)
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
    },
    { scope: cars }
  )
  return (
    <article
      ref={cars}
      id="cars"
      className="slideImages relative flex justify-center items-center text-4xl px-10 py-12 min-w-[100vw] h-[100vh] overflow-hidden bg-green-400/50"
    >
      {carsArr.map((car, i) => {
        return (
          <Image
            key={car.alt}
            id={car.alt}
            loading="lazy"
            className={`w-auto absolute ${
              i === 2 ? 'z-20' : i === 3 ? 'z-10' : ''
            } hover:z-50  max-w-[15vw]  max-h-[70vh] object-cover rounded-2xl`}
            src={car.url}
            alt={car.alt}
          />
        )
      })}
    </article>
  )
}
