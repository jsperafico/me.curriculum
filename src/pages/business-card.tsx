import * as React from "react"

import { cn } from "@/lib/utils"

import { Avatar, AvatarImage } from "../components/ui/avatar"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import picMe from "../assets/me.jpg"
import { Skills } from "@/components/skills"
import { Social } from "@/components/social"


const BusinessCardPage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (

  <article
    ref={ref}
    className={cn("max-w-[90mm] max-h-[50mm] sm:max-w-[135mm] sm:max-h-[75mm] md:max-w-[180mm] md:max-h-[100mm] perspective-1000 group fixed m-auto inset-0", className)}
    {...props}>
    <Card data-id="front" className="w-[90mm] h-[50mm] sm:w-[135mm] sm:h-[75mm] md:w-[180mm] md:h-[100mm] backface-hidden transform transition duration-[1.5s] group-hover:rotate-y-180 absolute grid grid-flow-col grid-cols-5 rounded-xl border-2 bg-cyan-100 text-cyan-800 shadow-cyan-700 border-cyan-100 shadow-lg">
      <CardHeader className="max-w-[288px] m-2 p-0 rounded-xl bg-cyan-800 text-cyan-100 shadow-cyan-800 shadow-md col-span-2">
        <Avatar className="hex m-auto size-24 sm:size-40 md:size-52 rounded-none">
          <AvatarImage src={picMe} />
        </Avatar>
      </CardHeader>
      <CardContent className="m-auto w-auto col-span-3 p-1 md:p-6 md:pt-0">
        <h1 className="text-center text-cyan-800 italic font-bold mb-0">Jonathan Pinto Sperafico</h1>
        <h2 className="text-center text-cyan-800 italic font-bold mt-3">Sr. Test Automation Engineer</h2>
      </CardContent>
    </Card>

    <Card data-id="back" className="w-[90mm] h-[50mm] sm:w-[135mm] sm:h-[75mm] md:w-[180mm] md:h-[100mm] backface-hidden transform transition duration-[1.5s] -rotate-y-180 group-hover:rotate-y-0 absolute insert-center grid grid-flow-col grid-cols-3 rounded-xl border-2 bg-cyan-100 text-cyan-800 shadow-cyan-700 border-cyan-100 shadow-lg">
      <CardHeader data-id="skills" className="m-auto w-full p-0 md:p-6 col-span-3">
        <Skills className="text-cyan-800 p-0" />
      </CardHeader>
      <CardContent data-id="contacts" className="max-w-[288px] justify-self-end m-2 px-10 py-0 rounded-xl bg-cyan-800 text-cyan-100 shadow-cyan-800 shadow-md content-center col-span-2 sm:px-5">
        <Social />
      </CardContent>
    </Card>
  </article >
))
BusinessCardPage.displayName = "BusinessCardPage"

export { BusinessCardPage }