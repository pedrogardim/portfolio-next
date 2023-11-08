import Link from "next/link";
import TagStyledText from "../ui/TagStyledText";

export default function Header() {
  return (
    <header>
      <h1 className="fixed text-xl font-bold">
        <Link href={"/"}>
          <TagStyledText className="text-2xl">pedrogardim</TagStyledText>
        </Link>
      </h1>
    </header>
  );
}
