"use client";

import "../src/app/globals.css";
import NavBar from "@/app/NavBar/page";
import Link from "next/link";

import { motion } from "framer-motion";

export default function projects() {
  return (
    // <motion.div
    //   initial={{ y: 25, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ delay: 4, duration: 0.75 }}
    // >
    // </motion.div>
    <>
      <NavBar />
      {/* Desktop */}
      <div className="px-8">
        <div className="text-3xl pb-4 text-semibold">Deployed Projects:</div>
        <div className="flex justify-center">
          <div className="flex flex-col max-w-[60vw]">
            <Link href="https://trevanseay.com" target="_blank">
              <div className="bg-stone-800 hover:scale-105 rounded-lg w-auto overflow-hidden">
                <img
                  src="/projects/trevanseay.png"
                  className="object-cover overflow-hidden"
                />
                <div className="p-2">
                  <div className="text-2xl font-semibold">Trevan Seay</div>
                  <div className="pt-2 text-lg">
                    A portfolio website created for a University of Tennessee
                    student majoring in architecture. Features a showcase of
                    their work and photography. Built using Next.js.
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
