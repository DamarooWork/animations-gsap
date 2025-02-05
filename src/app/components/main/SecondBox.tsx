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
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + secondElem.current?.offsetWidth,
        },
      })
      const tlPanel1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.panel1',
          snap: 1 / 10,
          end: () => '+=' + secondElem.current?.offsetHeight,
        },
        ease: 'none',
      })
      tlPanel1.to('.text1', {
        text: "The gsap object serves as the access point for most of GSAP's functionality. ",
        duration: 3,
      })
      tlPanel1.to('.text2', {
        text: "It's just a generic object with various methods and properties that create and control Tweens and Timelines, two of the most important concepts to understand.",
        duration: 6,
      })
      const tlPanel2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.panel2',
          start: () => '+=' + window.innerWidth / 4,
          end: () => '+=' + secondElem.current?.offsetHeight!,
        },
      })
      tlPanel2.to('.text3', {
        text: "What's a Tween? ",
        duration: 1,
      })
      tlPanel2.to('.text4', {
        delay: 0.5,
        text: "A Tween is what does all the animation work - think of it like a high-performance property setter. You feed in targets (the objects you want to animate), a duration, and any properties you want it to animate and then when the Tween's playhead moves to a new position, figures out what the property values should be at that point applies them accordingly.",
        duration: 12,
        ease: 'none',
      })
      const tlPanel3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.panel3',
          start: () => '+=' + window.innerWidth / 2,
          end: () => '+=' + secondElem.current?.offsetHeight!,
        },
      })
      tlPanel3.to('.text5', {
        text: "What's a Timeline?",
        duration: 1,
      })
      tlPanel3.to('.text6', {
        delay: 0.5,
        text: "A Timeline is a container for Tweens. It's the ultimate sequencing tool that lets you position animations in time wherever you want and then control the whole sequence easily with methods like pause(), play(), progress(), reverse(), timeScale(), etc.",
        duration: 7,
        ease: 'none',
      })
      const tlPanel4 = gsap.timeline({
        scrollTrigger: {
          trigger: '.panel4',
          start: () => '+=' + (window.innerWidth * 3) / 4,
          end: () => '+=' + secondElem.current?.offsetHeight!,
        },
      })
      tlPanel4.to('.text7', {
        text: `Easing`,
        duration: 1,
        ease: 'none',
        textAlign: 'center',
      })
      tlPanel4.to('.text8', {
        delay: 0.5,
        text: `Easing is the primary way to change the timing of your tweens.`,
        duration: 2,
        ease: 'none',
      })
      tlPanel4.to('.text9', {
        delay: 0.5,
        text: `Simply changing the ease can adjust the entire feel and personality of your animation.`,
        duration: 3,
        ease: 'none',
      })
      tlPanel4.to('.text10', {
        delay: 0.5,
        text: `There are infinite eases that you can use in GSAP so we created the visualizer below to help you choose exactly the type of easing that you need.`,
        duration: 4,
        ease: 'none',
      })
    },
    { scope: secondElem }
  )
  return (
    <section
      ref={secondElem}
      id="secondElem"
      className="mt-[50vh] text-6xl leading-[1.5]  flex  h-[100vh] "
    >
      <article
        className="panel panel1
       p-[10vw]  min-w-[100vw] h-[100vh] bg-orange-500/80"
      >
        <p className="text1 mb-[5vh]"></p>
        <p className="text2"></p>
      </article>
      <article
        className="panel panel2
       p-[5vw]  min-w-[100vw] h-[100vh] bg-violet-500/60"
      >
        <p className="text3 mb-[5vh]"></p>
        <p className="text4"></p>
      </article>
      <article
        className="panel panel3
        p-[5vw]  min-w-[100vw] h-[100vh] bg-red-500/50"
      >
        <p className="text5 mb-[5vh]"></p>
        <p className="text6"></p>
      </article>
      <article
        className="panel panel4
         p-[5vw]  min-w-[100vw] h-[100vh] bg-blue-500/60"
      >
        <p className="text7 mb-[5vh]"></p>
        <p className="text8 mb-[5vh]"></p>
        <p className="text9 mb-[5vh]"></p>
        <p className="text10"></p>
      </article>
    </section>
  )
}
