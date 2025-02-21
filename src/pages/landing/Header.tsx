import React from "react";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  href: string;
  isActive?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-20 w-full min-h-[98px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 items-center self-stretch my-auto">
        <div className="flex gap-2.5 items-start self-stretch my-auto w-9">
          <div className="flex w-9 h-9 bg-indigo-600 min-h-[36px] rounded-[90px]" />
        </div>
        <div className="self-stretch my-auto text-3xl font-semibold tracking-tighter text-neutral-900">
          iSabiBook
        </div>
      </div>
      <nav className="flex overflow-hidden flex-wrap gap-4 justify-center items-center self-stretch my-auto text-base font-medium leading-snug whitespace-nowrap min-w-[240px] text-zinc-600 max-md:max-w-full">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`gap-2.5 self-stretch px-5 py-3.5 my-auto ${
              item.isActive
                ? "font-semibold text-orange-50 bg-indigo-600"
                : "border border-solid border-blue-600 border-opacity-10"
            } rounded-[58px]`}
          >
            {item.label}
            {item.isActive && (
              <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-orange-50 rounded-full" />
            )}
          </Link>
        ))}
      </nav>
      <Link
        to="/signin"
        className="self-stretch py-5 pr-1 pl-7 my-auto text-lg font-semibold tracking-tighter leading-none text-center text-white bg-slate-950 min-h-[58px] rounded-[100px] w-[220px] max-md:pl-5"
      >
        Sign in to account
      </Link>
    </header>
  );
};

export default Header;
