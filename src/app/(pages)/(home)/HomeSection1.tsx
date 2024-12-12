import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";


const HomeSection1 = () => {
  return (
    <section className="container py-16">
      <div className="text-center space-y-4 md:space-y-8">
        <div>
          <Image
            className="max-md:w-32 md:w-[210px] m-auto h-auto"
            src="/pages/home/section1/emerald-40-years.webp"
            alt="section1"
            width={233}
            height={202}
          />
        </div>
        <div className="text-2xl lg:text-4xl text-[#636367]">
          Emerald Steps into it's 40th Year with all your support!
        </div>
        <div className="max-w-[800px] mx-auto text-sm lg:text-xl text-[#EBEBEB]">
          Experience the breadth and depth of the Emerald, with the professional
          services, infrastructure, support, and security that a large business
          needs.
        </div>
        <div>
        <Link href="/about" className="">
            <Button  variant="outline" className="text-black px-8 rounded-full">
            Know More
            </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
