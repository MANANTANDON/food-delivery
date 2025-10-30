import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 py-4 flex items-center justify-center gap-20">
        <Box
          component={"a"}
          href="/"
          className="fo font-semibold text-zinc-600 text-[20px] hover:text-zinc-900"
        >
          Menu
        </Box>
        <a href="/">
          <Image
            src={"/images/logo.png"}
            height={130}
            width={130}
            layout="intrinsic"
          />
        </a>
        <Box
          component={"a"}
          href="/"
          className="fo font-semibold text-zinc-600 text-[20px] hover:text-zinc-900"
        >
          Order Now
        </Box>
      </div>
    </>
  );
};
