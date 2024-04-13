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
      "Set your story in stone with my static website designs. Perfect for timeless content that stays consistent over time, ensuring your message remains crystal clear.",
  },
  {
    title: "Dynamic Frontend Development",
    icon: DynamicIcon,
    description:
      "Bring your website to life with dynamic frontend designs. With engaging features and interactive elements, I create a virtual space that evolves alongside your audience, sparking curiosity and interaction.",
  },
  {
    title: "Backend Development",
    icon: ServerIcon,
    description:
      "Power your ambitions with my backend solutions. Behind the scenes, I ensure everything runs smoothly, from managing your data to handling transactions, so you can focus on growing your business without worry.",
  },
];

export const projects = [
  {
    thumbnail: EntertainmentThumbnail,
    title: "Entertainment App",
    description:
      "A web app that allows users to signup and login to watch their favorite movies and shows. They can also bookmark them.",
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
    thumbnail: InvoiceThumbnail,
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
