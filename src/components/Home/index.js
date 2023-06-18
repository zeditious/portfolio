"use client";

import { motion } from "framer-motion";

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
            <img
              src="/home/portfolio.jpg"
              className="flex min-h-48 px-16 max-h-[50vh] rounded-md"
            />
            <div className="flex flex-col justify-center max-w-[60vw]">
              <div className="text-6xl font-medium py-4">Ian Allish</div>
              <div className="text-3xl">
                Aerospace Engineer | Junior Developer
              </div>
              <div className="text-lg pr-8 py-8 text-justify">
                Graduate from the University of Tennessee, Knoxville with a
                Bachelor of Science in Aerospace Engineering. Dedicated to
                reaching goals in team-oriented environments. Technical
                proficiency in Microsoft Office (Excel, Word, PowerPoint,
                Outlook), Apple Mac/OS Windows. Skilled in Python and MATLAB.
                Currently strengthening skills related to HTML/CSS/JS and C++.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
