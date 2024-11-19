import * as React from "react"

import { Outlet } from 'react-router-dom'
import { Header } from "./header"


const Layout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(() => (
  <div className="h-svh">
    <Header />
    <Outlet />
  </div>
))

Layout.displayName = "Layout"

export { Layout }