import * as React from "react"

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


interface FlagAttribute extends Omit<React.HTMLAttributes<HTMLDivElement>,
  'Brazil' | 'Finland' | 'Ireland' | 'Italy' | 'Poland'> {
  /**
   * A string value for the flag.
   */
  flag: string;
}

const flags = [
  {
    flag: "Brazil",
    src: Brazil,
    alt: "Brazillian Flag",
  },
  {
    flag: "Finland",
    src: Finland,
    alt: "Finnish Flag",
  },
  {
    flag: "Ireland",
    src: Ireland,
    alt: "Irish Flag",
  },
  {
    flag: "Italy",
    src: Italy,
    alt: "Italian Flag",
  },
  {
    flag: "Poland",
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


  return
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