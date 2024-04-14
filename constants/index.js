import {
  EntertainmentThumbnail,
  InvoiceThumbnail,
  MongodbIcon,
  NextIcon,
  NodeIcon,
  PrismaIcon,
  ReactIcon,
  ServerIcon,
  StaticIcon,
  DynamicIcon,
  TailwindcssIcon,
  lowResInvoiceThumbnail,
  lowResEntertainmentThumbnail,
} from "@/assets/images";

export const navLinks = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "services",
    label: "Services",
    href: "#services",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
  {
    id: "contact-me",
    label: "Contact Me",
    href: "#contact",
  },
];

export const services = [
  {
    title: "Static Web Development",
    icon: StaticIcon,
    description:
      "I create visually stunning websites that captivate and leave a lasting impression. With meticulous design and intuitive navigation, I craft user-friendly web experiences that effectively convey your brand's message and elevate your online presence.",
  },
  {
    title: "Frontend Development",
    icon: DynamicIcon,
    description:
      "I pride myself on crafting advanced frontend applications that take user experiences to the next level. My expertise in modern frameworks and technologies ensures that I deliver aesthetically superior and highly responsive web solutions.",
  },
  {
    title: "Backend Development",
    icon: ServerIcon,
    description:
      "My mission is to develop powerful and scalable backend systems that provide the foundation for dynamic and seamless web applications. I specialize in creating efficient and secure systems that support your business goals.",
  },
];

export const projects = [
  {
    thumbnail: {
      regular: EntertainmentThumbnail,
      lowRes: lowResEntertainmentThumbnail,
    },
    title: "Entertainment App",
    description:
      "A web app that allows users to signup and login to watch their favorite movies and shows. They can bookmark them for later too.",
    tags: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "React Router V6",
      "Cloudinary",
      "Swiper",
      "TailwindCSS",
    ],
    demo: "https://entertainment-web-app-jet.vercel.app/",
    repo: "https://github.com/husnain214/entertainment-web-app",
  },
  {
    thumbnail: {
      regular: InvoiceThumbnail,
      lowRes: lowResInvoiceThumbnail,
    },
    title: "Invoice App",
    description:
      "An app that allows users to create, update, and delete their invoices. They can filter invoices according to the status of invoices. They can also toggle between dark mode and light mode.",
    tags: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "CSS",
      "React Aria Components",
      "Light/Dark Theme",
    ],
    demo: "https://fm-invoice-app.fly.dev/",
    repo: "https://github.com/husnain214/invoice-app",
  },
];

export const skills = [
  {
    title: "React",
    symbol: ReactIcon,
  },
  {
    title: "Node",
    symbol: NodeIcon,
  },
  {
    title: "MongoDB",
    symbol: MongodbIcon,
  },
  {
    title: "Prisma",
    symbol: PrismaIcon,
  },
  {
    title: "Next",
    symbol: NextIcon,
  },
  {
    title: "TailwindCSS",
    symbol: TailwindcssIcon,
  },
];

export const socialLinks = [
  {
    label: "Github",
    href: "https://github.com/husnain214/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/husnainzahid/",
  },
  {
    label: "Frontend Mentor",
    href: "https://www.frontendmentor.io/profile/husnain214",
  },
];
