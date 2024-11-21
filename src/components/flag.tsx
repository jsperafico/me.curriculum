import * as React from "react"
import { Primitive } from '@radix-ui/react-primitive';

import { cn } from "@/lib/utils"

import Brazil from "../assets/brazil.svg"
import Finland from "../assets/finland.svg"
import Ireland from "../assets/ireland.svg"
import Italy from "../assets/italy.svg"
import Poland from "../assets/poland.svg"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

declare const COUNTRIES: readonly [
  "Brazil",
  "Finland",
  "Ireland",
  "Italy",
  "Poland"
];
type Countries = (typeof COUNTRIES)[number];

interface FlagAttribute extends React.ComponentPropsWithoutRef<typeof Primitive.div> {
  /**
   * A string value for the flag.
   */
  flag: Countries;
}

const flags = [
  {
    flag: COUNTRIES[0],
    src: Brazil,
    alt: "Brazillian Flag",
  },
  {
    flag: COUNTRIES[1],
    src: Finland,
    alt: "Finnish Flag",
  },
  {
    flag: COUNTRIES[2],
    src: Ireland,
    alt: "Irish Flag",
  },
  {
    flag: COUNTRIES[3],
    src: Italy,
    alt: "Italian Flag",
  },
  {
    flag: COUNTRIES[4],
    src: Poland,
    alt: "Polish Flag",
  },
]

function render(flag: string) {
  let item = flags.filter(f => f.flag == flag)[0]

  if (!item)
    return null

  return <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <img src={item.src} alt={item.alt} className="h-5" />
      </TooltipTrigger>
      <TooltipContent className="bg-cyan-800 text-cyan-100" side="bottom">
        <p>{item.flag}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
}

const Flag = React.forwardRef<
  HTMLDivElement,
  FlagAttribute
>(({ className, flag, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-5", className)}
    {...props}>

    {render(flag)}
  </div>
))
Flag.displayName = "Flag"

export { Flag }