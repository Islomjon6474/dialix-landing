import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/landing/Header";
import Intro from "@/components/landing/Intro";
import Companies from "@/components/landing/Companies";
import FunctionalCards from "@/components/landing/FunctionalCards";
import Components from "@/components/landing/Components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen items-center justify-between py-24 ${inter.className}`}
    >
      <Intro />
      <Companies />
      <FunctionalCards />
      <Components />
    </main>
  );
}
