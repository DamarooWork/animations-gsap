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
  const people = useRef<HTMLElement>(null)
  const peopleRefs = useRef<HTMLImageElement[]>([])
  useGSAP(
    () => {
      gsap.to(people.current, {
        scrollTrigger: {
          trigger: people.current,
          snap: 1 / 2,
          start: () => '+=' + (window.innerWidth - 17),
          end: () => '+=' + window.innerHeight,
        },
        ease: 'none',
      })
      const tlPeople = gsap.timeline({
        scrollTrigger: {
          trigger: people.current,
          start: () => '+=' + (window.innerWidth - 18),
          end: () => '+=' + window.innerHeight,
        },
      })
      tlPeople.to(people.current, {
        delay: 0.8,
      })
      peopleRefs.current.toReversed().forEach((img) => {
        tlPeople.fromTo(
          img,
          {
            position: 'absolute',
            width: '100%',
            height: 'auto',
            opacity: 0.8,
            scale: 1.1,
          },
          {
            position: 'absolute',
            scale: 1,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
            zIndex: 10,
          },
          '>-1'
        )
      })

      peopleRefs.current.forEach((img) => {
        tlPeople.fromTo(
          img,
          {
            position: 'absolute',
            scale: 1,
            opacity: 0,
            ease: 'power3.out',
          },
          {
            position: 'static',
            scale: 1,
            opacity: 1,
            x: 0,
            width: () => window.innerWidth / peopleRefs.current.length,
            height: '100%',
            duration: 1.3,
            ease: 'power3.out',
          },
          '>-1'
        )
      })
      tlPeople.to(
        '#textPeople',
        {
          text: '#person',
          duration: 1,
          ease: 'power1.inOut',
        },
        '>-1.2'
      )
    },
    { scope: people }
  )
  return (
    <article
      ref={people}
      id="people"
      className="slideImages relative flex justify-start items-center    min-w-[100vw] h-[100vh] overflow-hidden bg-cyan-400/50"
    >
      {peopleArr.map((person, i) => {
        return (
          <Image
            ref={(node) => {
              if (node) {
                peopleRefs.current[i] = node
              }
            }}
            key={person.alt}
            id={person.alt}
            loading="lazy"
            className={`w-1/${peopleArr.length} opacity-0 absolute block h-full object-cover`}
            src={person.url}
            alt={person.alt}
          />
        )
      })}
      <p
        id="textPeople"
        className="text-6xl text-orange-400 italic font-semibold absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
      ></p>
    </article>
  )
}
