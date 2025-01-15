import * as React from "react"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"

function render(className: string | undefined, props: {}, ref: React.ForwardedRef<HTMLUListElement>) {

  return <ul ref={ref} className="list-none text-right p-0 mx-3">
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5 flex flex-row", className)} {...props}>
      <span className="px-2">Java</span>
    </li>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3 flex flex-row", className)} {...props}>
      <span className="px-2">Python</span>
    </li>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-2 flex-row hidden sm:flex", className)} {...props}>
      <span className="px-2">NodeJS</span>
    </li>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-1 flex-row hidden md:flex", className)} {...props}>
      <span className="px-2">Rust</span>
    </li>
    <Separator className="my-1 border-y border-cyan-800 md:border-cyan-100 md:group-hover:border-cyan-800" orientation="horizontal"></Separator>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5 flex flex-row", className)} {...props}>
      <span className="px-2">Selenium</span>
    </li>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-4 flex flex-row", className)} {...props}>
      <span className="px-2">JMeter</span>
    </li>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3 flex flex-row", className)} {...props}>
      <span className="px-2">Cypress</span>
    </li>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-2 flex-row hidden md:flex", className)} {...props}>
      <span className="px-2">RestAssured</span>
    </li>
    <Separator className="my-1 border-y border-cyan-800 md:border-cyan-100 md:group-hover:border-cyan-800" orientation="horizontal"></Separator>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5 flex flex-row", className)} {...props}>
      <span className="px-2">Docker</span>
    </li>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-4 flex-row hidden sm:flex", className)} {...props}>
      <span className="px-2">Gitlab</span>
    </li>
    <li className={cn("mb-0 justify-end transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3 flex-row hidden md:flex", className)} {...props}>
      <span className="px-2">Kubernetes</span>
    </li>
  </ul>
}

const Skills = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  render(className, props, ref)
))

Skills.displayName = "Skills"

export { Skills }