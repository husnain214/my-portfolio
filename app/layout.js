import { Navbar, Footer } from "@/components";
import { helveticaNeue, sebNeue } from "@/assets/fonts";
import "./globals.css";

export const metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Husnain Zahid's Portfolio",
  description:
    "Hello, I'm Husnain, a full stack web developer crafting seamless digital experiences from front-end design to back-end functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sebNeue.variable} ${helveticaNeue.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

