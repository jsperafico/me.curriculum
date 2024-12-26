import * as React from "react"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"

function render(className: string | undefined, props: {}) {

  return <ul className="list-none text-right m-0 start-0 content-center">
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5", className)} {...props}>
      <span className="pr-3">Java</span>
    </li>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3", className)} {...props}>
      <span className="pr-3">Python</span>
    </li>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-2", className)} {...props}>
      <span className="pr-3">NodeJS</span>
    </li>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-1", className)} {...props}>
      <span className="pr-3">Rust</span>
    </li>
    <Separator className="my-1 border-cyan-800 border-y" orientation="horizontal"></Separator>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5", className)} {...props}>
      <span className="pr-3">Selenium</span>
    </li>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-4", className)} {...props}>
      <span className="pr-3">JMeter</span>
    </li>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3", className)} {...props}>
      <span className="pr-3">Cypress</span>
    </li>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-2", className)} {...props}>
      <span className="pr-3">RestAssured</span>
    </li>
    <Separator className="my-1 border-cyan-800 border-y" orientation="horizontal"></Separator>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5", className)} {...props}>
      <span className="pr-3">Docker</span>
    </li>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-4", className)} {...props}>
      <span className="pr-3">Gitlab</span>
    </li>
    <li className={cn("mb-0 px-3 transition-colors group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3", className)} {...props}>
      <span className="pr-3">Kubernetes</span>
    </li>
  </ul>
}

const Skills = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }) => (
  render(className, props)
))

Skills.displayName = "Skills"

export { Skills }