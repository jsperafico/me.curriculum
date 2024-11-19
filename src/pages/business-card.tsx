import * as React from "react"

import { cn } from "@/lib/utils"

import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import picMe from "../assets/me.jpg"
import { Separator } from "../components/ui/separator";


const BusinessCardPage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (

  <article
    ref={ref}
    className={cn("max-w-[180mm] max-h-[100mm] perspective-1000 group fixed m-auto inset-0", className)}
    {...props}>
    <Card className="w-[180mm] h-[100mm] backface-hidden transform transition duration-[1.5s] group-hover:rotate-y-180 absolute grid grid-flow-col auto-cols-max rounded-xl border-2 bg-cyan-100 text-cyan-800 shadow-cyan-700 border-cyan-100 shadow-lg">
      <CardHeader className="max-w-[288px] m-2 rounded-xl bg-cyan-800 text-cyan-100 shadow-cyan-800 shadow-md">
        <Avatar className="hex m-auto size-60 rounded-none">
          <AvatarImage src={picMe} />
        </Avatar>
      </CardHeader>
      <CardContent className="m-auto w-auto prose prose-sm">
        <h1 className="text-center text-cyan-800 italic font-bold mb-0">Jonathan Pinto Sperafico</h1>
        <h2 className="text-center text-cyan-800 italic font-bold mt-3">Sr. Test Automation Engineer</h2>
      </CardContent>
    </Card>

    <Card className="w-[180mm] h-[100mm] backface-hidden transform transition duration-[1.5s] -rotate-y-180 group-hover:rotate-y-0 absolute insert-center grid grid-flow-col auto-cols-fr rounded-xl border-2 bg-cyan-100 text-cyan-800 shadow-cyan-700 border-cyan-100 shadow-lg">
      <CardHeader className="m-auto w-full prose prose-sm">
        <ul className="list-none text-right m-0 start-0 content-center">
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5">
            <span className="pr-3">Java</span>
          </li>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3">
            <span className="pr-3">Python</span>
          </li>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-2">
            <span className="pr-3">NodeJS</span>
          </li>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-1">
            <span className="pr-3">Rust</span>
          </li>
          <Separator className="my-1 border-cyan-800 border-y" orientation="horizontal"></Separator>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5">
            <span className="pr-3">Selenium</span>
          </li>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-4">
            <span className="pr-3">JMeter</span>
          </li>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3">
            <span className="pr-3">Cypress</span>
          </li>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-2">
            <span className="pr-3">RestAssured</span>
          </li>
          <Separator className="my-1 border-cyan-800 border-y" orientation="horizontal"></Separator>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-5">
            <span className="pr-3">Docker</span>
          </li>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-4">
            <span className="pr-3">Gitlab</span>
          </li>
          <li className="mb-0 px-3 transition-colors hover:text-cyan-100 hover:bg-cyan-800 after:font-family-awesome after:skill-3">
            <span className="pr-3">Kubernetes</span>
          </li>
        </ul>
      </CardHeader>
      <CardContent className="max-w-[288px] justify-self-end m-2 rounded-xl bg-cyan-800 text-cyan-100 shadow-cyan-800 shadow-md pt-4 content-center">
        <ul className="m-auto list-none text-left">
          <li className="my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100 before:font-family-awesome before:social-website">
            <a className="pl-2" href="https://www.jsperafico.me" target="_blank">https://www.jsperafico.me</a>
          </li>
          <li className="my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100 before:font-family-awesome before:social-linkedin">
            <a className="pl-2" href="https://www.linkedin.com/in/jonathanpintosperafico/" target="_blank">jonathanpintosperafico</a>
          </li>
          <li className="my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100 before:font-family-awesome before:social-github">
            <a className="pl-2" href="https://github.com/jsperafico" target="_blank">jsperafico</a>
          </li>
          <li className="my-3 px-3 cursor-pointer transition-colors hover:text-cyan-800 hover:bg-cyan-100 before:font-family-awesome before:social-mail">
            <a className="pl-2" href="mailto:hire@jsperafico.me">hire@jsperafico.me</a>
          </li>
        </ul>
      </CardContent>
    </Card>
  </article >
))
BusinessCardPage.displayName = "BusinessCardPage"

export { BusinessCardPage }