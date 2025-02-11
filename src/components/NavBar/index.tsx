import { auth } from "@/auth";
import { Popover } from "@/components/Popover";
import { NavBarLink } from "@/types";
import Link from "next/link";

const NavBarContent = async ({ links }: { links: NavBarLink[] }) => {
  const session = await auth();

  return (
    <>
      {links
        .filter((link) => (!session?.user ? !link.authedOnly : !link.unathedOnly))
        .map((link) => (
          <li key={link.href} className="w-full">
            <Link
              href={link.href}
              className="min-sm:max-w-24 w-full hover:outline hover:outline-2 p-1 rounded-sm text-center block"
            >
              {link.name}
            </Link>
          </li>
        ))}
    </>
  );
};

export const NavBar = ({ navBarLinks }: { navBarLinks: NavBarLink[] }) => {
  return (
    <nav className="flex flex-wrap items-center justify-end p-4 bg-primary-foreground text-primary-content dark:text-primary-content-dark shadow-md shadow-primary/10">
      <div className="flex mr-8 sm:hidden">
        <Popover>
          <NavBarContent links={navBarLinks} />
        </Popover>
      </div>

      <ul className="hidden sm:flex gap-2 items-center justify-end">
        <NavBarContent links={navBarLinks} />
      </ul>
    </nav>
  );
};
