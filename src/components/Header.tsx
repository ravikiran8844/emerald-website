import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header>
      <div className="hidden xl:block">
        <nav className="page_wrapper py-4">
          <div className="flex justify-between gap-10 items-center">
            <div>
              <Image
                className="h-12"
                src="/logo.svg"
                alt="logo"
                width={48}
                height={48}
              />
            </div>

          

            <div className="text-base">Ghar Ghar Meh Emerald!</div>
          </div>
        </nav>
      </div>

      <div className="block xl:hidden">
        <div className="bg-gold py-2">
          <div className="page_wrapper">
            <div className="text-sm text-center text-black">
              Ghar Ghar Meh Emerald!
            </div>
          </div>
        </div>
        <nav className="page_wrapper py-4">
          <div className="flex justify-between gap-10 items-center">
            <div>logo</div>
            <Sheet>
              <SheetTrigger>
                <HiOutlineMenu className="size-6" />
              </SheetTrigger>
              <SheetContent className="text-black">
                <SheetHeader>
                  <SheetTitle className="mt-6">
                    Are you absolutely sure?
                  </SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
