import Link from "next/link";
import { version } from "../../../../package.json";

const SidebarFooterInfo = () => {
  return (
    <Link href="/acerca-de">
      <p className="text-xs cursor-pointer">{`<🐤/> SIGEM version ${version}`}</p>
    </Link>
  );
};

export default SidebarFooterInfo;
