
import logoPostbuddy from '@/images/logos/postbuddy.svg'
import logoIbm from '@/images/logos/ibm.svg'
import logoRhapsody from '@/images/logos/rhapsody.svg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'
const siteMeta = {
  title: "Jakob Staudal",
  description: "Jakob Staudal is a Computer Science student and full-stack developer at Postbuddy, a Danish startup. He is passionate about coding, algorithms, and all things techy.",
  copyright: "Jakob Staudal",
  author: {
    name: "Jakob Staudal",
    email: "jakobstaudal@outlook.com",
    github: "https://github.com/staudal",
    linkedin: "https://www.linkedin.com/in/jakobstaudal/",
  },
  siteUrl: "https://jakey.dk"
}
export const resume = [
  {
    company: 'Postbuddy',
    title: 'Full Stack Developer',
    logo: logoPostbuddy,
    start: 'Mar 2024',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Rhapsody',
    title: 'Backend Developer',
    logo: logoRhapsody,
    start: 'Sep 2023',
    end: 'Mar 2024',
  },
  {
    company: 'IBM',
    title: 'Student Assistant',
    logo: logoIbm,
    start: 'May 2022',
    end: 'Aug 2023',
  },
]
export const projects = [
  {
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
    logo: logoFleek,
  },
  {
    name: 'Universal Blue',
    description:
      'Custom Operating System images based on Fedora.',
    link: { href: 'https://ublue.it', label: 'Universal Blue' },
    logo: logoUblue,
  },
  {
    name: 'Bluefin',
    description:
      'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
    link: { href: 'https://projectbluefin.io', label: 'Bluefin' },
    logo: logoUblue,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Custom commands as webhooks.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },


]


export default siteMeta;