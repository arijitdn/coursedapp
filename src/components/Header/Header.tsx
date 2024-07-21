import Link from "next/link";
import React from "react";
import ShimmerButton from "../magicui/shimmer-button";

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between p-6 font-pacifico">
        <span className="text-2xl font-bold">
          Course<span className="text-blue-600">Dapp</span>
          <span className="text-4xl text-orange-600">.</span>
        </span>
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <Link
              href="/about-us"
              className="hover:text-orange-600 transition-all duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className="hover:text-orange-600 transition-all duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="hover:text-orange-600 transition-all duration-300"
            >
              Pricing
            </Link>
          </li>
        </ul>

        <div className="z-10 flex items-center justify-center">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Join Now
            </span>
          </ShimmerButton>
        </div>
      </nav>
    </header>
  );
}

export default Header;
