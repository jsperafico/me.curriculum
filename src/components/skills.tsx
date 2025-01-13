import * as React from "react"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"

function render(className: string | undefined, props: {}, ref: React.ForwardedRef<HTMLUListElement>) {

  return <ul ref={ref} className="list-none m-0 p-0 start-0 justify-items-end">
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5 flex flex-row", className)} {...props}>
      <span className="px-3">Java</span>
    </li>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3 flex flex-row", className)} {...props}>
      <span className="px-3">Python</span>
    </li>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-2 flex-row hidden sm:flex", className)} {...props}>
      <span className="px-3">NodeJS</span>
    </li>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-1 flex-row hidden md:flex", className)} {...props}>
      <span className="px-3">Rust</span>
    </li>
    <Separator className="my-1 border-cyan-800 border-y hidden md:block" orientation="horizontal"></Separator>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5 flex flex-row", className)} {...props}>
      <span className="px-3">Selenium</span>
    </li>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-4 flex flex-row", className)} {...props}>
      <span className="px-3">JMeter</span>
    </li>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3 flex flex-row", className)} {...props}>
      <span className="px-3">Cypress</span>
    </li>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-2 flex-row hidden md:flex", className)} {...props}>
      <span className="px-3">RestAssured</span>
    </li>
    <Separator className="my-1 border-cyan-800 border-y hidden md:block" orientation="horizontal"></Separator>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5 flex flex-row", className)} {...props}>
      <span className="px-3">Docker</span>
    </li>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-4 flex-row hidden sm:flex", className)} {...props}>
      <span className="px-3">Gitlab</span>
    </li>
    <li className={cn("mb-0 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3 flex-row hidden sm:flex", className)} {...props}>
      <span className="px-3">Kubernetes</span>
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