import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiInstagram, CiYoutube } from "react-icons/ci";
import { RiFacebookFill } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10">
      <section className="page_wrapper">
        
        <div className="hidden lg:block">
        <div>
          <div className="flex flex-wrap gap-4 items-center justify-center mb-20 border border-[#3F3F3F] bg-[#1e1e1e80] w-fit m-auto py-2 px-4 rounded-full">
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
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Explore the Brilliance Today
          </div>
          <div className="text-base lg:text-lg">
            <span className="text-gold text-lg">
              Gold, Silver, Platinum or Diamond
            </span>{" "}
            - The Perfect Piece Awaits
          </div>
        </div>
        </div>

        <div className="hidden md:block">
          <div className="relative mt-16 ">
            <div className="max-w-4xl m-auto">
              <div className="bg-gold rounded-2xl p-10 flex justify-between items-center text-black">
                <div className="text-2xl font-bold">Connect With Us</div>
                <div className="text-xl font-bold flex gap-1 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  info@ejindia.com
                </div>
              </div>
            </div>
            <div className="mt-10 hidden md:block">
              <div className="grid grid-cols-[35%,calc(65%-40px)] gap-10">
                <div>
                  <div className="text-start">
                    <div className="text-2xl font-semibold">
                      Get The Latest News About Emerald.
                    </div>
                    <div className="flex items-center justify-start gap-4 mt-10">
                      <Link
                        href="/"
                        className="border border-white rounded-full p-2"
                      >
                        <RiFacebookFill className="size-5 bg-black text-white" />
                      </Link>
                      <Link
                        href="/"
                        className="border border-white rounded-full p-2"
                      >
                        <CiYoutube className="size-5 bg-black text-white" />
                      </Link>
                      <Link
                        href="/"
                        className="border border-white rounded-full p-2"
                      >
                        <CiInstagram className="size-5 bg-black text-white" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-10">
                    <div>
                      <div className="text-lg font-semibold mb-3">Company</div>

                      <div className="flex flex-col gap-2 text-md">
                        <Link href="#">About</Link>
                        <Link href="#">Certifications</Link>
                        <Link href="#">What’s New</Link>
                        <Link href="#">Our story</Link>
                      </div>
                    </div>

                    <div>
                      <div className="text-lg font-semibold mb-3">Information</div>

                      <div className="flex flex-col gap-2 text-md">
                        <Link href="#">Customer Support</Link>
                        <Link href="#">Terms & Conditions</Link>
                        <Link href="#">Privacy Policy</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold mb-3">Quick Links</div>

                      <div className="flex flex-col gap-2 text-md">
                        <Link href="#">Sustainability</Link>
                        <Link href="#">Media</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Careers</Link>
                      </div>
                    </div>
                  </div>

                  <hr className="my-6" />

                  <div className="flex flex-wrap justify-between items-center gap-5">
                    <div className="text-xs text-center">
                      © {currentYear}, Emerald Pvt. Ltd. All rights reserved
                    </div>

                    <div className="flex gap-5 justify-center">
                      <div className="text-xs text-center">
                        <Link href="#" className="underline text-gray-300">
                          Privacy Policy
                        </Link>
                      </div>
                      <div className="text-xs text-center">
                        <Link href="#" className="underline text-gray-300">
                          Terms & Conditions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 md:hidden">
        <div className="bg-gold p-4">
          <div className="page_wrapper text-center space-y-2">
            <div className="text-2xl font-bold">Connect With Us</div>
            <div className="text-lg font-medium flex gap-1 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              info@ejindia.com
            </div>
          </div>
        </div>

        <div className="page_wrapper">
          <div className="text-center py-10">
            <div className="text-2xl font-semibold">
              Get The Latest News About Emerald.
            </div>
            <div className="flex items-center justify-center gap-4 mt-5">
              <Link href="/" className="border border-white rounded-full p-2">
                <RiFacebookFill className="size-5 bg-black text-white" />
              </Link>
              <Link href="/" className="border border-white rounded-full p-2">
                <CiYoutube className="size-5 bg-black text-white" />
              </Link>
              <Link href="/" className="border border-white rounded-full p-2">
                <CiInstagram className="size-5 bg-black text-white" />
              </Link>
            </div>
          </div>

          <div className="mb-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline text-lg">
                  Company
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <div>
                    <Link href="/" className="block py-2">
                      About
                    </Link>
                    <Link href="/" className="block py-2">
                      Certifications
                    </Link>
                    <Link href="/" className="block py-2">
                      What’s New
                    </Link>
                    <Link href="/" className="block py-2">
                      Our story
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline text-lg">
                  Information
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <div>
                    <Link href="/" className="block py-2">
                      Customer Support
                    </Link>
                    <Link href="/" className="block py-2">
                      Terms & Conditions
                    </Link>
                    <Link href="/" className="block py-2">
                      Privacy Policy
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline text-lg">
                  Quick Links
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <div>
                    <Link href="/" className="block py-2">
                      Sustainability
                    </Link>
                    <Link href="/" className="block py-2">
                      Media
                    </Link>
                    <Link href="/" className="block py-2">
                      Blog
                    </Link>
                    <Link href="/" className="block py-2">
                      Careers
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <div className="text-xs text-center">
              © {currentYear}, Emerald Pvt. Ltd. All rights reserved
            </div>

            <div className="flex gap-5 justify-center mt-5">
              <div className="text-xs text-center">
                <Link href="#" className="underline text-gray-300">
                  Privacy Policy
                </Link>
              </div>
              <div className="text-xs text-center">
                <Link href="#" className="underline text-gray-300">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
