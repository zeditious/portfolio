"use client";

import NavBar from "@/app/NavBar/page";

import "../src/app/globals.css";
import { motion } from "framer-motion";

export default function about() {
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
      <div className="hidden md:block px-8">
        <div className="text-3xl text-semibold">About Me:</div>
      </div>
    </>
  );
}
