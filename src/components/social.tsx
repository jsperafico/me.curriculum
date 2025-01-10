import * as React from "react"
import { cn } from "@/lib/utils"


function render(className: string | undefined, props: {}, ref: React.ForwardedRef<HTMLUListElement>) {

  return <ul ref={ref} className="m-auto list-none text-left">
    <li className={cn("my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100 before:font-family-awesome before:social-website", className)} {...props}>
      <a className="pl-2" href="https://www.jsperafico.me" target="_blank">https://www.jsperafico.me</a>
    </li>
    <li className={cn("my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100 before:font-family-awesome before:social-linkedin", className)} {...props}>
      <a className="pl-2" href="https://www.linkedin.com/in/jonathanpintosperafico/" target="_blank">jonathanpintosperafico</a>
    </li>
    <li className={cn("my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100 before:font-family-awesome before:social-github", className)} {...props}>
      <a className="pl-2" href="https://github.com/jsperafico" target="_blank">jsperafico</a>
    </li>
    <li className={cn("my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100 before:font-family-awesome before:social-mail", className)} {...props}>
      <a className="pl-2" href="mailto:hire@jsperafico.me">hire@jsperafico.me</a>
    </li>
  </ul>
}

const Social = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  render(className, props, ref)
))

Social.displayName = "Social"

export { Social }