import type { Metadata } from "next";
import {
  Roboto,
  Space_Mono,
  Space_Grotesk,
  Lexend_Deca,
} from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/shared/smooth-scroll";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const space_mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

const lexend_deca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-deca",
});

const tthoves = localfont({
  src: [
    {
      path: "../public/fonts/TT-Hoves-Pro-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-tthoves",
});

export const metadata: Metadata = {
  title: "Gustaf Grönlund - Front End Developer",
  description:
    "Passionate Front-End Developer with a keen eye for UI/UX, crafting seamless experiences across web and mobile platforms. I am a skilled developer covering the full spectrum, including UI/UX design, web development, and mobile development. I thrive on bringing ideas to life with code, always focusing on creating intuitive and visually engaging interfaces.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${space_grotesk.variable} ${space_mono.variable} ${tthoves.variable} bg-[#e9e9e9] dark:bg-[#282828]`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
