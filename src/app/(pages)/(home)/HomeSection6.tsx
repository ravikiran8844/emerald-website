import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HomeSection6 = () => {
  return (
    <div className="py-16 page_wrapper rounded-bl-[80px] rounded-br-[80px]"  style={{background:' linear-gradient(180deg, rgba(0, 0, 0, 0) 13%, #F78D1E 119.25%)'}}>
      <div className="grid lg:grid-cols-[25%,auto] gap-6">
        <div className="text-center lg:text-start mb-6 lg:my-auto">
          <div className="text-2xl lg:text-3xl font-semibold">What you’ll get as a Result</div>
        </div>

       <div className="grid sm:grid-cols-2 gap-6">
       <div>
            <div className="border border-white p-6 rounded-xl">
                <div className="text-2xl mb-3 font-semibold">Manufacturing Presence</div>
                <div>Emerald gives most importance to Integrated Management system (IMS) because of rigorous processes, which can continually increase the quality value of products and services.</div>

                <div className="mt-10 flex justify-between items-center gap-5">
                  <Image src="/pages/home/section6/card-img1.png" className="h-20" width={80} height={80} alt="card-img" /> 
                    <Button className="!bg-transparent border border-white text-white rounded-3xl">SUBMIT</Button>
                </div>
            </div>
        </div>
        <div>
            <div className="border border-white p-6 rounded-xl">
                <div className="text-2xl mb-3 font-semibold">Retail Presence</div>
                <div>Emerald gives most importance to Integrated Management system (IMS) because of rigorous processes, which can continually increase the quality value of products and services.</div>

                <div className="mt-10 flex justify-between items-center gap-5">
                  <Image src="/pages/home/section6/card-img2.png" className="h-20" width={80} height={80} alt="card-img" /> 
                    <Button className="!bg-transparent border border-white text-white rounded-3xl">SUBMIT</Button>
                </div>
            </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default HomeSection6;
