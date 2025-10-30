import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Header } from "../Layout/Header";

export const TopContainer = () => {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center relative">
        <Header />
        <Container maxWidth="lg">
          <div className="py-10">
            <div className="text-center fo text-[45px] text-zinc-600">
              Best Homemade{" "}
              <span className="font-semibold text-[50px] text-[#18749B] fr relative">
                Chicken & Mutton
                <div className="absolute -top-3 -left-3  rotate-270">
                  <Image
                    src={"/images/chicken.svg"}
                    height={30}
                    width={30}
                    layout="intrinsic"
                  />
                </div>
                <div className="absolute -top-2 right-0  rotate-270">
                  <Image
                    src={"/images/mutton.svg"}
                    height={30}
                    width={30}
                    layout="intrinsic"
                  />
                </div>
              </span>{" "}
              in{" "}
              <span className="font-semibold text-[50px] text-[#DFC437] fr">
                Jammu
              </span>
            </div>
            <div className="text-center fo text-zinc-700 mt-2">
              <div className="text-center fo text-[25px] my-3 text-zinc-500">
                Freshly prepared with love, delivered to your doorstep ❤️
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 my-10">
              <button className="bg-zinc-700 cursor-pointer text-zinc-200 w-100 py-3 rounded-2xl shadow-lg text-[22px]">
                Order Now !
              </button>
              <button className="cursor-pointer text-zinc-800 w-100 py-2 rounded-2xl text-[22px]">
                View Menu
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
