import classNames from "classnames";
import { useState } from "react";
import { navLinks, navbarHeight } from "../globals";

export default function Navbar({ currentHref }: { currentHref: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkClasses = "items-center gap-8 uppercase tracking-widest text-xs";

  return (
    <nav
      style={{ height: `${navbarHeight}px` }}
      className="relative z-50 border-gray-200 bg-white"
    >
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 py-1">
        <a
          href="/"
          className="flex items-center justify-center space-x-3 sm:w-1/6 rtl:space-x-reverse"
        >
          <img src="/logo.svg" className="w-28" alt="Cem Logo" />
        </a>
        <button
          id="burger-button"
          onClick={() => {
            if (isMenuOpen) document.body.style.overflow = "auto";
            else document.body.style.overflow = "hidden";

            setIsMenuOpen(!isMenuOpen);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-14 w-14 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg>
        </button>
        {navLinks.map(({ href, name }) => (
          <a
            key={href}
            href={href}
            className={classNames(
              { "text-yellow-500": currentHref === href },
              "hidden w-1/6 rounded py-2 text-center text-xl uppercase text-gray-900 hover:bg-gray-100 lg:block lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-gray-700",
            )}
          >
            {name}
          </a>
        ))}
      </div>

      {/*  mobile! */}
      <div
        className={classNames(
          "fixed left-0 flex h-[100dvh] w-full flex-col overflow-hidden bg-cem transition-all xl:hidden",
          linkClasses,
          {
            "max-h-0": !isMenuOpen,
            "max-h-screen pb-4": isMenuOpen,
          },
        )}
      >
        {navLinks.map(({ name, href }) => {
          const active = currentHref === href;
          return (
            <a
              key={href}
              className={classNames(
                "flex items-center text-xl text-white transition-colors first-of-type:pt-8",
                active ? "font-bold" : "text-white hover:text-cem",
              )}
              href={href}
            >
              {name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
