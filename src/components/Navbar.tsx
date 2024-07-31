'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { setMaxIdleHTTPParsers } from "http";
 

function Navbar({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);
    
  return (
    
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={'/'}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="courses">
        <div className="flex flex-col text-sm space-y-4">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advance Composition</HoveredLink>
            <HoveredLink href="/courses">Song Writing</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
        </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
        </Link>

      </Menu>
    </div>
  )
}

export default Navbar
