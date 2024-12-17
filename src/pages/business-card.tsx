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
        <Skills />
      </CardHeader>
      <CardContent className="max-w-[288px] justify-self-end m-2 rounded-xl bg-cyan-800 text-cyan-100 shadow-cyan-800 shadow-md pt-4 content-center">
        <Social />
      </CardContent>
    </Card>
  </article >
))
BusinessCardPage.displayName = "BusinessCardPage"

export { BusinessCardPage }