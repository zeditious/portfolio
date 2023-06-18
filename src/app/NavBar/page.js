"use client";

import Link from "next/link";
import { Drawer, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Links = [
  {
    value: "/",
    label: "About",
  },
  {
    value: "mailto:ian@ianallish.com",
    label: "Contact",
  },
  {
    value: "https://www.linkedin.com/in/ian-allish/",
    label: "LinkedIn",
  },
  {
    value: "https://github.com/zeditious",
    label: "GitHub",
  },
  {
    value: "/",
    label: "Socials",
  },
];

export default function NavBar() {
  const [opened, { open, close }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  return (
    <>
      {/* Desktop */}
      <div className="p-8 hidden md:block">
        <div className="flex flex-row text-white justify-between font-light pb-4">
          <div className="md:text-4xl text-3xl font-medium px-2 tracking-wider">
            IA
          </div>
          <div className="flex items-center">
            {Links.map((link, i) => (
              <NavLink link={link} key={i} />
            ))}
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>

      {/* Mobile */}
      <div className="p-2 block md:hidden flex flex-row justify-between items-center">
        <div className="md:text-4xl text-3xl font-medium px-2 tracking-wider">
          IA
        </div>

        <Drawer
          opened={opened}
          onClose={close}
          position="top"
          size="40%"
          overlayProps={{ color: "black", blur: 4 }}
        >
          <div className="flex flex-col items-center justify-between">
            {Links.map((link, i) => (
              <NavLink link={link} key={i} />
            ))}
          </div>
        </Drawer>

        <Burger
          opened={opened}
          onClick={open}
          aria-label={label}
          color="white"
        />
      </div>
    </>
  );
}

const NavLink = ({ link, setOpened }) => {
  return (
    <Link
      href={link.value}
      scroll={false}
      className="mb-2"
      onClick={() => setOpened(false)}
    >
      <span className="text-md lg:text-lg underline-offset-4 hover:underline p-4">
        {link.label}
      </span>
    </Link>
  );
};