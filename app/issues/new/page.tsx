"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root
        radius="large"
        placeholder="Enter title…"
      ></TextField.Root>
      <TextArea radius="large" size="3" placeholder="Enter description…" />
      <Button radius="large">Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
