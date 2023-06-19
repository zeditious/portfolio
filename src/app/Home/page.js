"use client";

import { motion } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    // <motion.div
    //   initial={{ y: 25, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ delay: 4, duration: 0.75 }}
    // >
    // </motion.div>
    <>
      {/* Desktop */}
      <div className="block">
        <div className="flex flex-col text-center items-center">
          <div className="flex flex-col md:flex-row py-8">
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.75 }}
            >
              <img
                src="/home/portfolio.jpg"
                className="flex min-h-48 px-8 md:px-16 md:max-h-[60vh] rounded-md"
              />
            </motion.div>
            <div className="md:flex md:flex-col px-4 md:px justify-center md:max-w-[60vw]">
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.75 }}
              >
                <div className="text-4xl md:text-6xl font-medium py-4">
                  Ian Allish
                </div>
                <div className="text-xl md:text-3xl">
                  Aerospace Engineer | Junior Developer
                </div>
                <div className="text-md md:text-lg md:pr-8 py-8 text-justify">
                  I am a graduate from the University of Tennessee, Knoxville
                  with a Bachelor of Science in Aerospace Engineering. Dedicated
                  to reaching goals in team-oriented environments. Technical
                  proficiency in Microsoft Office (Excel, Word, PowerPoint,
                  Outlook), Apple MacOS / Windows. Skilled in Python and MATLAB.
                  Currently strengthening skills related to HTML/CSS/JS and C++.
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.75 }}
              >
                <div>
                  <Menu as="div" className="relative inline-block">
                    <div className="hidden md:block">
                      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-neutral-700 px-4 py-2 text-lg font-medium text-white hover:bg-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        It is a pleasure to meet you. Let me introduce myself.
                        <ChevronDownIcon
                          className="ml-2 -mr-1 h-7 w-87 text-white align-center"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <div className="block md:hidden">
                      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-neutral-700 px-4 py-2 text-md font-medium text-white hover:bg-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Let me introduce myself.
                        <ChevronDownIcon
                          className="ml-2 -mr-1 h-7 w-87 text-white align-center"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-neutral-700 rounded-md bg-neutral-700 ring-1 ring-neutral-700 ring-opacity-2 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-neutral-600 text-white"
                                  : "text-white bg-neutral-700"
                              } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                            >
                              Inspiration
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-neutral-600 text-white"
                                  : "text-white bg-neutral-700"
                              } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                            >
                              Projects
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-neutral-600 text-white"
                                  : "text-white bg-neutral-700"
                              } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                            >
                              Resume
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
