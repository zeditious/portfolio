"use client";

import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";
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
      <div className="hidden md:block">
        <div className="flex flex-col text-center items-center">
          <div className="flex flex-row py-8">
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.75 }}
            >
              <img
                src="/home/portfolio.jpg"
                className="flex min-h-48 px-16 max-h-[50vh] rounded-md"
              />
            </motion.div>
            <div className="flex flex-col justify-center max-w-[60vw]">
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.75 }}
              >
                <div className="text-6xl font-medium py-4">Ian Allish</div>
                <div className="text-3xl">
                  Aerospace Engineer | Junior Developer
                </div>
                <div className="text-lg pr-8 py-8 text-justify">
                  I am a graduate from the University of Tennessee, Knoxville
                  with a Bachelor of Science in Aerospace Engineering. Dedicated
                  to reaching goals in team-oriented environments. Technical
                  proficiency in Microsoft Office (Excel, Word, PowerPoint,
                  Outlook), Apple MacOS / Windows. Skilled in Python and MATLAB.
                  Currently strengthening skills related to HTML/CSS/JS and C++.
                </div>
              </motion.div>
              <div className="text-xl">
                It's a pleasure to meet you. Let's get to know each other.
              </div>
              <div>
                <Menu as="div" className="relative inline-block">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white bg-opacity-20 px-4 py-2 text-lg font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      Let's get to know each other.
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-7 w-87 text-white align-center"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Menu.Items>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && "bg-blue-500"}`}
                          href="/account-settings"
                        >
                          Inspirations
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
