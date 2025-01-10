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
    className={cn("float-start sticky top-0 w-screen h-12 bg-cyan-800 shadow-cyan-900 shadow-lg max-md:landscape:float-left max-md:landscape:left-0 max-md:landscape:h-screen max-md:landscape:w-12 print:hidden", className)}
  >
    <NavigationMenuList className='gap-3 max-md:landscape:flex-col max-md:landscape:space-x-0'>
      <NavigationMenuItem className="block text-center select-none rounded-md leading-none no-underline outline-none transition-colors border p-2 text-cyan-100 shadow-cyan-200 shadow-sm hover:bg-cyan-100 hover:text-cyan-800 focus:bg-cyan-100 focus:text-cyan-800 max-md:landscape:w-full">
        <NavigationMenuLink href='/' className="before:mr-2 before:font-family-awesome before:content-['\f2bb'] max-md:landscape:text-[0px] max-md:landscape:before:text-sm max-md:landscape:before:m-auto">Business Card</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="block text-center select-none rounded-md leading-none no-underline outline-none transition-colors border p-2 text-cyan-100 shadow-cyan-200 shadow-sm hover:bg-cyan-100 hover:text-cyan-800 focus:bg-cyan-100 focus:text-cyan-800 max-md:landscape:w-full">
        <NavigationMenuLink href='/curriculum' className="before:mr-2 before:font-family-awesome before:content-['\f570'] max-md:landscape:text-[0px] max-md:landscape:before:text-sm max-md:landscape:before:m-auto">Curriculum</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="hidden text-center select-none rounded-md leading-none no-underline outline-none transition-colors border p-2 text-cyan-100 shadow-cyan-200 shadow-sm hover:bg-cyan-100 hover:text-cyan-800 focus:bg-cyan-100 focus:text-cyan-800 max-md:landscape:w-full">
        <NavigationMenuLink href='/articles' className="before:mr-2 before:font-family-awesome before:content-['\f07c'] max-md:landscape:text-[0px] max-md:landscape:before:text-sm max-md:landscape:before:m-auto">Articles</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
))

Header.displayName = "Header"

export { Header }