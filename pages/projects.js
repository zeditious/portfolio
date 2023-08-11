"use client";

import "../src/app/globals.css";
import NavBar from "@/app/NavBar/page";

import { motion } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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
        <div className="text-3xl text-semibold">Projects:</div>
        <div className="bg-gray-700 hover:bg-stone-900 font-bold py-2 px-4 rounded-full">
          Test
        </div>
      </div>
    </>
  );
}
