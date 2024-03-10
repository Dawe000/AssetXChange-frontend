"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 ASSETXCHANGE - Streamlining digital asset management
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                this is a cool title to use !!
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Saaaswouss
                </span>
              </h1>
              <p>
                Use this app and alos balls balls balls
                asset management balls balls balls balls
                asset management balls balls balls balls
                asset management balls balls balls balls
              </p>

              <div className="mt-10">
              

              
              </div>
            </div>

            
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
