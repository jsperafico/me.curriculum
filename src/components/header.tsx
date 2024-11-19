import * as React from "react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className }, ref) => (
  <NavigationMenu
    ref={ref}
    className={cn("float-start sticky top-0 w-screen h-12 bg-cyan-800 shadow-cyan-900 shadow-lg print:hidden", className)}
  >
    <NavigationMenuList className='gap-3'>
      <NavigationMenuItem className="block select-none rounded-md leading-none no-underline outline-none transition-colors border p-2 text-cyan-100 shadow-cyan-200 shadow-sm hover:bg-cyan-100 hover:text-cyan-800 focus:bg-cyan-100 focus:text-cyan-800">
        <NavigationMenuLink href='/'>Business Card</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="block select-none rounded-md leading-none no-underline outline-none transition-colors border p-2 text-cyan-100 shadow-cyan-200 shadow-sm hover:bg-cyan-100 hover:text-cyan-800 focus:bg-cyan-100 focus:text-cyan-800">
        <NavigationMenuLink href='/curriculum'>Curriculum</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="hidden select-none rounded-md leading-none no-underline outline-none transition-colors border p-2 text-cyan-100 shadow-cyan-200 shadow-sm hover:bg-cyan-100 hover:text-cyan-800 focus:bg-cyan-100 focus:text-cyan-800">
        <NavigationMenuLink href='/projects'>Projects</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
))

Header.displayName = "Header"

export { Header }