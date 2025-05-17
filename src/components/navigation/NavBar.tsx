"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { ThemeToggle } from "../button/ThemeToggle";

export default function NavBar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <Disclosure
      as="nav"
      className="bg-background md:py-2 xl:py-5 font-[BarlowCondensed] text-4xl uppercase"
    >
      <div className="mx-auto w-11/12">
        <div className="flex justify-between h-16">
          <div className="sm:flex items-center sm:space-x-8 hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 font-medium text-sm ${
                  isActive(item.href)
                    ? "border-indigo-500"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center sm:hidden -mr-2">
            {/* Mobile menu button */}
            <DisclosureButton className="group inline-flex relative justify-center items-center focus:outline-hidden hover:bg-gray-100 p-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-inset text-gray-400 hover:text-gray-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <FaBars
                aria-hidden="true"
                className="block group-data-open:hidden size-6"
              />
              <IoMdClose
                aria-hidden="true"
                className="group-data-open:block hidden size-6"
              />
            </DisclosureButton>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={`block py-2 pr-4 pl-3 border-l-4 font-medium text-base ${
                isActive(item.href)
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
