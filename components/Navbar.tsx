"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from '@headlessui/react'
import Hero from "./Hero";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4 py-2" />
      <Hero/>
    </div>
  );
}

const TradeMateLogo = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image
        href="logo.png"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <TradeMateLogo/>
          <span>TradeMate</span>
        </HoverBorderGradient>
        <Button
          as="a"
          href="https://t.me/trader_mate_bot"
          target="_blank"
          className="items-center gap-2 rounded-full bg-blue-700 px-3 text-sm/4 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-black-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          Telegram Bot
        </Button>
      </Menu>
    </div>
  );
}
