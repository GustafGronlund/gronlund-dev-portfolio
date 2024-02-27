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
    "Hello world! I'm Gustaf Grönlund, a Frontend Developer based in Malmö, Sweden. I enjoy creating beautiful applications that both feel good and have a solid functionality. I love to experiment with new technologies and follow the latest trends in UI/UX.",
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
