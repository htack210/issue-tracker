"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues/list",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b border-t mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classnames({
                "border-2 rounded-tl-none rounded-br-none border-sky-600":
                  link.href === currentPath,
                "border-0": link.href !== currentPath,
                "text-sky-500 hover:bg-sky-500 hover:text-sky-100 rounded-xl px-4 transition-colors font-semibold":
                  true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Logout</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
