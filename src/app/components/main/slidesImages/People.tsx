'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

import Image from 'next/image'
import person1 from '@/../public/images/slidesImages/people/person1.jpg'
import person2 from '@/../public/images/slidesImages/people/person2.jpg'
import person3 from '@/../public/images/slidesImages/people/person3.jpg'
import person4 from '@/../public/images/slidesImages/people/person4.jpg'
import person5 from '@/../public/images/slidesImages/people/person5.jpg'

const peopleArr: IImage[] = [
  { url: person1, alt: 'person1' },
  { url: person2, alt: 'person2' },
  { url: person3, alt: 'person3' },
  { url: person4, alt: 'person4' },
  { url: person5, alt: 'person5' },
]
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

      tlPeople.from('#person5', {
        delay: 1.5,
        display: 'absolute',
        duration: 1,
        rotateZ: 10,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '-=' + window.innerWidth / 4,
      })
      tlPeople.from('#person4', {
        display: 'absolute',
        duration: 0.8,
        rotateZ: 20,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '-=' + window.innerWidth / 4,
      })
      tlPeople.from('#person3', {
        display: 'absolute',
        duration: 0.6,
        rotateZ: 0,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: 0,
      })
      tlPeople.from('#person2', {
        display: 'absolute',
        duration: 0.5,
        rotateZ: -10,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '+=' + window.innerWidth / 4,
      })
      tlPeople.from('#person1', {
        display: 'absolute',
        duration: 0.4,
        rotateZ: -20,
        scale: 0.2,
        y: () => '+=' + window.innerHeight / 2,
        x: () => '+=' + window.innerWidth / 4,
      })
    },
    { scope: people }
  )
  return (
    <article
      ref={people}
      id="people"
      className="slideImages relative flex lg:flex-row justify-around items-center text-4xl px-10 py-12  min-w-[100vw] h-[100vh] overflow-hidden bg-cyan-400/50"
    >
      {peopleArr.map((person) => {
        return (
          <Image
            key={person.alt}
            id={person.alt}
            loading="lazy"
            className="w-[18vw] h-auto object-cover rounded-2xl"
            src={person.url}
            alt={person.alt}
          />
        )
      })}
    </article>
  )
}
