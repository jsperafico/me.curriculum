import * as React from "react"
import { cn } from "@/lib/utils"


function render(className: string | undefined, props: {}, ref: React.ForwardedRef<HTMLUListElement>) {

  return <ul ref={ref} className="m-auto list-none text-left">
    <li className={cn("my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100", className)} {...props}>
      <a className="w-full" href="https://www.jsperafico.me" target="_blank">
        <div className="flex flex-row before:font-family-awesome before:social-website">
          <span className="hidden sm:block before:mr-5">https://www.jsperafico.me</span>
        </div>
      </a>
    </li>
    <li className={cn("my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100", className)} {...props}>
      <a className="w-full" href="https://www.linkedin.com/in/jonathanpintosperafico/" target="_blank">
        <div className="flex flex-row before:font-family-awesome before:social-linkedin">
          <span className="hidden sm:block before:mr-5">jonathanpintosperafico</span>
        </div>
      </a>
    </li>
    <li className={cn("my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100", className)} {...props}>
      <a className="w-full" href="https://github.com/jsperafico" target="_blank">
        <div className="flex flex-row before:font-family-awesome before:social-github">
          <span className="hidden sm:block before:mr-5">jsperafico</span>
        </div>
      </a>
    </li>
    <li className={cn("my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100", className)} {...props}>
      <a className="w-full" href="mailto:hire@jsperafico.me">
        <div className="flex flex-row before:font-family-awesome before:social-mail">
          <span className="hidden sm:block before:mr-5">hire@jsperafico.me</span>
        </div>
      </a>
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