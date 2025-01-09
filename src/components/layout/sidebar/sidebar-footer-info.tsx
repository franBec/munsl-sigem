import Link from "next/link";
import packageJson from "../../../../package.json";

const SidebarFooterInfo = () => {
  return (
    <Link href="/acerca-de">
      <p className="text-xs cursor-pointer">{`SIGEM version ${packageJson.version}`}</p>
    </Link>
  );
};

export default SidebarFooterInfo;
