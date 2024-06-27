"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b border-t mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "border-2 rounded-tl-none rounded-br-none border-sky-600":
                link.href === currentPath,
              "border-0": link.href !== currentPath,
              "text-myBlue hover:bg-myBlue hover:text-sky-100 rounded-xl px-4 transition-colors font-semibold":
                true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
