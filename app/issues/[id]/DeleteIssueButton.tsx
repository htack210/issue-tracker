import { ButtonThemeRed } from "../../components/ButtonSettings";
import { TrashIcon } from "@radix-ui/react-icons";
const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <button className={ButtonThemeRed()}>
      <TrashIcon />
      Delete Issue
    </button>
  );
};

export default DeleteIssueButton;
