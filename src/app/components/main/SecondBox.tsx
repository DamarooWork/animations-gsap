'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)
export default function SecondBox() {
  const secondElem = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const sections = gsap.utils.toArray('.panel')
      console.log(secondElem, sections)

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
    },
    { scope: secondElem }
  )
  return (
    <section
      ref={secondElem}
      id="secondElem"
      className="mt-[50vh] flex  h-[100vh]"
    >
      <article
        className="panel flex justify-center items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] bg-orange-500"
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
          doloremque!
        </p>
      </article>
      <article
        className="panel flex justify-center items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] bg-violet-500"
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
          doloremque!
        </p>
      </article>
      <article
        className="panel flex justify-center items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] bg-red-500"
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
          doloremque!
        </p>
      </article>
      <article
        className="panel flex justify-center items-center
       text-4xl px-10 py-12  min-w-[100vw] h-[100vh] bg-blue-500"
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
          doloremque!
        </p>
      </article>
    </section>
  )
}
