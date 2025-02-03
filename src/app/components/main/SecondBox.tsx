'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)
export default function SecondBox() {
  const secondElem = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const sections = gsap.utils.toArray('.panel')
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: secondElem.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + secondElem.current?.offsetWidth,
        },
      })
      gsap.to('.panel1', {
        scrollTrigger: {
          trigger: '.panel1',
        },
        text: 'Рассказать тебе факт?',
        duration: 3,
        ease: 'power2.inOut',
      })
      gsap.to('.panel2', {
        scrollTrigger: {
          trigger: '.panel2',
          start: () => '+=' + window.innerWidth / 4,
        },
        delay: 1,
        text: 'У Юки правда есть жопка!',
        duration: 3,
        ease: 'power2.inOut',
      })
      gsap.to('.panel3', {
        scrollTrigger: {
          trigger: '.panel3',
          start: () => '+=' + window.innerWidth / 2,
        },
        delay: 1,
        text: 'Ага, да-да, правда есть!',
        duration: 3,
        ease: 'power2.inOut',
      })
      gsap.to('.panel4', {
        scrollTrigger: {
          trigger: '.panel4',
          start: () => '+=' + (window.innerWidth * 3) / 4,
        },
        delay: 1,
        text: 'Все еще не веришь?!',
        duration: 3,
        ease: 'power2.inOut',
      })
    },
    { scope: secondElem }
  )
  return (
    <section
      ref={secondElem}
      id="secondElem"
      className="mt-[50vh] text-6xl  flex  h-[100vh]"
    >
      <article
        className="panel panel1 flex justify-center items-center
       px-10 py-12  min-w-[100vw] h-[100vh] bg-orange-500"
      >
        <p>...</p>
      </article>
      <article
        className="panel panel2 flex justify-center items-center
       px-10 py-12  min-w-[100vw] h-[100vh] bg-violet-500"
      >
        <p>...</p>
      </article>
      <article
        className="panel panel3 flex justify-center items-center
        px-10 py-12  min-w-[100vw] h-[100vh] bg-red-500"
      >
        <p>...</p>
      </article>
      <article
        className="panel panel4 flex justify-center items-center
        px-10 py-12  min-w-[100vw] h-[100vh] bg-blue-500"
      >
        <p>...</p>
      </article>
    </section>
  )
}
