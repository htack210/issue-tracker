import { ButtonTheme } from "@/app/components/ButtonSettings";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <button className={ButtonTheme()}>
      <Pencil2Icon />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </button>
  );
};

export default EditIssueButton;
