"use client";

import "../src/app/globals.css";
import NavBar from "@/app/NavBar/page";
import Link from "next/link";

import { motion } from "framer-motion";

const depProjectsData = [
  {
    image: "/projects/trevanseay.png",
    value: "https://trevanseay.com",
    title: "Trevan Seay",
    description:
      "A portfolio website created for a University of Tennessee student majoring in architecture. Features a showcase of their work and photography. Built using Next.js.",
  },
  {
    image: "/projects/ianallish.png",
    value: "https://ianallish.com",
    title: "Ian Allish",
    description: "A portfolio site, created for me.",
  },
];

const inProgProjectsData = [];

export default function projects() {
  return (
    <>
      <NavBar />
      <div className="px-2 md:px-8">
        <div className="text-xl md:text-3xl py-2 md:pb-4 text-semibold">
          Deployed Projects:
        </div>
        <div className="flex justify-center">
          <div className="w-full md:max-w-[60vw]">
            {depProjectsData.map((link, i) => (
              <ProductCardDep link={link} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const ProductCardDep = ({ link }) => {
  return (
    <div className="flex justify-center">
      {/* Desktop */}
      <motion.div
        className="hidden md:block md:py-4"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link href={link.value} target="_blank">
          <div className="bg-stone-800 rounded-lg w-auto overflow-hidden">
            <img src={link.image} className="object-cover overflow-hidden" />
            <div className="p-2">
              <div className="text-lg md:text-2xl font-semibold">
                {link.title}
              </div>
              <div className="pt-2 text-md md:text-lg">{link.description}</div>
            </div>
          </div>
        </Link>
      </motion.div>
      {/* Mobile */}
      <div className="block md:hidden py-2">
        <Link href={link.value} target="_blank">
          <div className="bg-stone-800 rounded-lg w-auto overflow-hidden">
            <img src={link.image} className="object-cover overflow-hidden" />
            <div className="p-2">
              <div className="text-lg md:text-2xl font-semibold">
                {link.title}
              </div>
              <div className="pt-2 text-md md:text-lg">{link.description}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
