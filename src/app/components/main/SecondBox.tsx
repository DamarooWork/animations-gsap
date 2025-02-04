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
        text: "The gsap object serves as the access point for most of GSAP's functionality. It's just a generic object with various methods and properties that create and control Tweens and Timelines, two of the most important concepts to understand.",
        duration: 10,
        ease: 'none',
      })
      gsap.to('.panel2', {
        scrollTrigger: {
          trigger: '.panel2',
          start: () => '+=' + window.innerWidth / 4,
        },
        text: "What's a Tween? A Tween is what does all the animation work - think of it like a high-performance property setter. You feed in targets (the objects you want to animate), a duration, and any properties you want it to animate and then when the Tween's playhead moves to a new position, figures out what the property values should be at that point applies them accordingly.",
        duration: 10,
        ease: 'none',
      })
      gsap.to('.panel3', {
        scrollTrigger: {
          trigger: '.panel3',
          start: () => '+=' + window.innerWidth / 2,
        },
        text: "What's a Timeline? A Timeline is a container for Tweens. It's the ultimate sequencing tool that lets you position animations in time wherever you want and then control the whole sequence easily with methods like pause(), play(), progress(), reverse(), timeScale(), etc.",
        duration: 10,
        ease: 'none',
      })
      gsap.to('.panel4', {
        scrollTrigger: {
          trigger: '.panel4',
          start: () => '+=' + (window.innerWidth * 3) / 4,
        },
        text: `Easing is the primary way to change the timing of your tweens. Simply changing the ease can adjust the entire feel and personality of your animation. There are infinite eases that you can use in GSAP so we created the visualizer below to help you choose exactly the type of easing that you need.`,
        duration: 10,
        ease: 'none',
      })
    },
    { scope: secondElem }
  )
  return (
    <section
      ref={secondElem}
      id="secondElem"
      className="mt-[50vh] text-6xl  flex  h-[100vh] text-center"
    >
      <article
        className="panel panel1 flex justify-center items-center
       p-20  min-w-[100vw] h-[100vh] bg-orange-500"
      >
        <p>...</p>
      </article>
      <article
        className="panel panel2 flex justify-center items-center
       p-20  min-w-[100vw] h-[100vh] bg-violet-500"
      >
        <p>...</p>
      </article>
      <article
        className="panel panel3 flex justify-center items-center
        p-20  min-w-[100vw] h-[100vh] bg-red-500"
      >
        <p>...</p>
      </article>
      <article
        className="panel panel4 flex justify-center items-center
        p-20  min-w-[100vw] h-[100vh] bg-blue-500"
      >
        <p>...</p>
      </article>
    </section>
  )
}
