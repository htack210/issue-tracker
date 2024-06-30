import Link from "next/link";
import React from "react";
import { ButtonTheme } from "../components/ButtonSettings";

const IssueActions = () => {
  return (
    <div className="mb-5">
      <button className={ButtonTheme()}>
        <Link href="/issues/new">New Issue</Link>
      </button>
      {/* {LinkButton(<Link href="/issues/new">New Issue</Link>)} */}
    </div>
  );
};

export default IssueActions;
