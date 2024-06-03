import React from "react";
import Image from "next/image";

import { CurrencyConverter } from "../currency-converter";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";

const HeaderTop = () => {
  return (
    <>
      <header className=" mx-auto flex w-full flex-row items-center justify-between  ">
        <div className="mx-auto flex flex-row items-center justify-between px-2 py-3 sm:w-9/12 sm:px-0">
          <div>
            <Image
              width={200}
              height={200}
              className="hidden dark:block"
              src={"/MAB/logoLight.png"}
              alt="Logo"
            />
            <Image
              width={200}
              height={200}
              className="block dark:hidden"
              src={"/MAB/logo.png"}
              alt="Logo"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <ThemeToggle variant="outline" size="icon" />
            <CurrencyConverter />
            <Button className=" text-white" variant={"primaryBTM"}>
              Donate Now
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTop;
