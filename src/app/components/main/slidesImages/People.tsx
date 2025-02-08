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
      console.log(window.innerHeight * 2, window.innerWidth, window.innerHeight)

      // const images = gsap.utils.toArray('.person')
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
        delay: 2,
      })
      peopleRefs.current.toReversed().forEach((img) => {
        tlPeople.fromTo(
          img,
          {
            position: 'absolute',
            // x: () => '+=' + window.innerWidth / 5,
            width: '100%',
            height: 'auto',
            opacity: 0.8,
            scale: 1.2,
          },
          {
            position: 'absolute',
            scale: 1,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
            zIndex: 10,
          },
          '>-1.2'
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
      // tlPeople.from('#person5', {
      //   delay: 1.5,
      //   display: 'absolute',
      //   duration: 1,
      //   rotateZ: 10,
      //   scale: 0.2,
      //   y: () => '+=' + window.innerHeight / 2,
      //   x: () => '-=' + window.innerWidth / 4,
      // })
      // tlPeople.from('#person4', {
      //   display: 'absolute',
      //   duration: 0.8,
      //   rotateZ: 20,
      //   scale: 0.2,
      //   y: () => '+=' + window.innerHeight / 2,
      //   x: () => '-=' + window.innerWidth / 4,
      // })
      // tlPeople.from('#person3', {
      //   display: 'absolute',
      //   duration: 0.6,
      //   rotateZ: 0,
      //   scale: 0.2,
      //   y: () => '+=' + window.innerHeight / 2,
      //   x: 0,
      // })
      // tlPeople.from('#person2', {
      //   display: 'absolute',
      //   duration: 0.5,
      //   rotateZ: -10,
      //   scale: 0.2,
      //   y: () => '+=' + window.innerHeight / 2,
      //   x: () => '+=' + window.innerWidth / 4,
      // })
      // tlPeople.from('#person1', {
      //   display: 'absolute',
      //   duration: 0.4,
      //   rotateZ: -20,
      //   scale: 0.2,
      //   y: () => '+=' + window.innerHeight / 2,
      //   x: () => '+=' + window.innerWidth / 4,
      // })
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
    </article>
  )
}
