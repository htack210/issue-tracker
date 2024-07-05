import Link from "next/link";
import React from "react";
import { ButtonTheme } from "../../components/ButtonSettings";
import { Flex } from "@radix-ui/themes";
import IssueStatusFilter from "./issueStatusFilter";

const IssueActions = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <button className={ButtonTheme()}>
        <Link href="/issues/new">New Issue</Link>
      </button>
    </Flex>
  );
};

export default IssueActions;
