import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/jakob-head.jpeg'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Jakob Staudal"
        description={siteMeta.description}
        canonical="https://jakey.dk/about"
        openGraph={{
          url: 'https://jakey.dk/about',
          images: [
            {
              url: `https://og.brian.dev/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'jakey.dk',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jakob Staudal. I live in Denmark where I’m currently pursuing
              a Bachelor’s Degree in Computer Science.
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                I’m Jakob, a Computer Science student at SDU in Odense, Denmark,
                where I’m diving deep into the world of coding, algorithms, and
                all things techy. But I’m not just hitting the books—I’m also
                rolling up my sleeves as a full-stack developer at Postbuddy, a
                super cool Danish startup that’s shaking things up when it comes
                to automated direct marketing.
              </p>
              <p>
                When I’m not coding, you’ll probably find me working on small,
                fun tools that make everyday tasks a bit easier (and a lot more
                interesting!). Outside of tech, I’m all about staying
                healthy—I’m really into running and fitness, and I love the
                feeling of pushing my limits.
              </p>
              <p>
                Travel is another big passion of mine, and whenever I get the
                chance, I’m off exploring new places. I recently moved to Odense
                after spending my whole life in Northern Zealand, and I’m loving
                the adventure of discovering a new city.
              </p>
              <p>
                At home, I’m kept on my toes by my two dogs, Maui and Elliot,
                who bring a lot of energy and joy into my life. And I’m lucky to
                share all of this with my amazing girlfriend, Line, who’s also
                studying at SDU. Together, we’re navigating the exciting (and
                sometimes hectic) life of students, developers, and dog parents.
              </p>
              <p>
                Welcome to my little corner of the web! Feel free to explore,
                check out my projects, and see what I’ve been up to. Let’s
                connect and maybe even create something amazing together!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href={siteMeta.author.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={siteMeta.author.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
