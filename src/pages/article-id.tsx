import * as React from "react"

import { cn } from "@/lib/utils"
import { useParams } from 'react-router-dom'


function renderArticle() {
  const { id } = useParams()

  return <></>
}

const ArticleIdPage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  renderArticle()
))

ArticleIdPage.displayName = "ArticleIdPage"

export { ArticleIdPage }