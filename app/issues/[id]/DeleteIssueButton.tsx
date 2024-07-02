"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { ButtonThemeRed } from "../../components/ButtonSettings";
import { TrashIcon } from "@radix-ui/react-icons";
const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button className={ButtonThemeRed()}>
          <TrashIcon />
          Delete Issue
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this issue? This action cannot be
          undone!
        </AlertDialog.Description>
        <Flex direction="row" mt="4" gapX="3">
          <AlertDialog.Cancel>
            <Button variant="solid" color="yellow">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red">
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
