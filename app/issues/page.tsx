import React from "react";
import { Button } from "@radix-ui/themes";
import { ThemeButton } from "../components/ButtonSettings";
import Link from "next/link";

const IssuesPage = () => {
  const themeButton = ThemeButton();
  return (
    <div>
      <button className={themeButton}>
        {/* "bg-sky-500 rounded-lg hover:bg-sky-700 text-white px-2"> */}
        <Link href="/issues/new">New Issue</Link>
      </button>
    </div>
  );
};

export default IssuesPage;
