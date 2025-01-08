import * as React from "react"
import { Primitive, PrimitivePropsWithRef } from '@radix-ui/react-primitive'

import { cn } from "@/lib/utils"

import Brazil from "@/assets/brazil.svg"
import Finland from "@/assets/finland.svg"
import Ireland from "@/assets/ireland.svg"
import Italy from "@/assets/italy.svg"
import Poland from "@/assets/poland.svg"

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

interface FlagAttribute extends PrimitivePropsWithRef<typeof Primitive.div> {
  /**
   * A string value for the flag.
   */
  flag: Countries;
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

function render(flag: string, asChild?: boolean) {
  const item = flags.filter(f => f.flag == flag)[0]

  if (!item)
    return null

  return <div className="@container">
    <div className="@xs:block @sm:hidden">
      <img data-tooltip={false} src={item.src} alt={item.alt} className="h-5" />
    </div>
    <div className="@xs:hidden @sm:block">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild={asChild}>
            <img data-tooltip={true} src={item.src} alt={item.alt} className="h-5" />
          </TooltipTrigger>
          <TooltipContent className="bg-cyan-800 text-cyan-100" side="bottom">
            <p>{item.flag}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
}

const Flag = React.forwardRef<
  HTMLDivElement,
  FlagAttribute
>(({ className, flag, asChild, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-5", className)}
    {...props}>

    {render(flag, asChild)}
  </div>
))
Flag.displayName = "Flag"

export { Flag, type Countries }