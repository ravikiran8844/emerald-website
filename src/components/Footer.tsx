import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container py-10">
      <div className="hidden lg:block">
        <div className="flex flex-wrap gap-4 items-center justify-center mb-10 border border-[#3F3F3F] bg-[#1e1e1e80] w-fit m-auto py-2 px-4 rounded-full">
          <Link
            href="/"
            className="py-2 px-6 rounded-full text-white bg-[#ffffff1a]"
          >
            Platinum
          </Link>
          <Link
            href="/"
            className="py-2 px-6 rounded-full text-white bg-[#ffffff1a]"
          >
            Silver
          </Link>
          <Image
            className="h-12"
            src="/logo.svg"
            alt="section1"
            width={48}
            height={48}
          />
          <Link
            href="/"
            className="py-2 px-6 rounded-full text-white bg-[#ffffff1a]"
          >
            Gold
          </Link>
          <Link
            href="/"
            className="py-2 px-6 rounded-full text-white bg-[#ffffff1a]"
          >
            Diamond
          </Link>
        </div>
      </div>
      <div className="text-center space-y-4">
        <div className="text-xl sm:text-2xl lg:text-4xl font-bold">
          Explore the Brilliance Today
        </div>
        <div className="text-base lg:text-lg">
          <span className="text-gold text-lg">
            Gold, Silver, Platinum or Diamond
          </span>{" "}
          - The Perfect Piece Awaits
        </div>
      </div>
    </footer>
  );
};

export default Footer;
