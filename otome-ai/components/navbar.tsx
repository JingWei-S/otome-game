"use client";

import { cn } from "@/lib/utils";
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";

const font = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex border-b border-primary/20 item-center bg-secondary h-16 py-2 px-10">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            tale.ai
          </h1>
        </Link>
      </div>
    </div>
  );
};
