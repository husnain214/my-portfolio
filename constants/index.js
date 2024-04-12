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

export const services = [
  {
    title: "Static Web Development",
    icon: StaticIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore itaque repellat consequuntur voluptatem qui",
  },
  {
    title: "Dynamic Frontend Development",
    icon: DynamicIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore itaque repellat consequuntur voluptatem qui",
  },
  {
    title: "Backend Development",
    icon: ServerIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore itaque repellat consequuntur voluptatem qui",
  },
];

export const projects = [
  {
    thumbnail: EntertainmentThumbnail,
    title: "Entertainment App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed quisquam esse provident quaerat odit at accusantium? Similique doloribus quaerat deserunt magni natus repudiandae neque, perspiciatis, nesciunt sapiente nobis odio!",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed quisquam esse provident quaerat odit at accusantium? Similique doloribus quaerat deserunt magni natus repudiandae neque, perspiciatis, nesciunt sapiente nobis odio!",
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
