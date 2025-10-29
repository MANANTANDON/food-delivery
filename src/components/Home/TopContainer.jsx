import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

export const TopContainer = () => {
  return (
    <>
      <div className="my-4 py-4">
        <Container maxWidth="lg">
          <div className="py-10">
            <div className="text-center fo text-3xl text-zinc-600">
              Best Homemade{" "}
              <span className="font-semibold text-4xl text-zinc-800 fr relative">
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
              <span className="font-semibold text-4xl text-zinc-800 fr">
                Jammu
              </span>
            </div>
            <div className="text-center fo text-3xl text-zinc-700 mt-2">
              <div className="text-center fo text-lg my-3 text-zinc-500">
                Freshly prepared with love, delivered to your doorstep ❤️
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 my-10">
              <button className="bg-zinc-700 cursor-pointer text-zinc-200 w-100 py-3 rounded-2xl shadow-lg">
                Order Now !
              </button>
              <button className="cursor-pointer text-zinc-800 w-100 py-2 rounded-2xl">
                View Menu
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
