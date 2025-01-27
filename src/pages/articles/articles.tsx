import { Card, CardContent, CardHeader } from "../../components/ui/card"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const articles = [
  {
    id: '17823yeoqwiuhihe708daw08r0j1',
    title: 'This is my super article',
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
]

export const ArticlesPage = () => {

  console.log(encodeURI(import.meta.env.VITE_SECRET_ARTICLE_EDITOR))

  const articlesList = articles.map(article => {
    return (
      <a href={'/articles/' + article.id}>
        <Card className="max-h-56 p-4 bg-cyan-800 text-cyan-100 shadow-cyan-700 border-cyan-100 shadow-lg transition-colors delay-150 duration-500 hover:bg-cyan-100 hover:text-cyan-800 hover:border-cyan-800">
          <CardHeader className="my-2 mx-6 p-0">{article.title}</CardHeader>
          <CardContent className="line-clamp-1  text-ellipsis">{article.summary}</CardContent>
        </Card>
      </a>
    )
  })

  const formSchema = z.object({
    filter: z.string().min(3, {
      message: "Filter input must have at least 3 characters.",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filter: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <article className="max-w-full max-h-fit m-auto">
      <section className="pt-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row items-center gap-4 m-4">
            <FormField
              control={form.control}
              name="filter"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full">
                  <FormLabel className="hidden">Filter the list by relevante content</FormLabel>
                  <FormControl>
                    <Input placeholder="What interests you?" {...field} className="bg-cyan-800 text-cyan-100 placeholder-cyan-100" />
                  </FormControl>
                  <FormMessage className="text-cyan-800 px-3" />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-cyan-800 text-cyan-100 transition-colors delay-150 duration-500 hover:bg-cyan-100 hover:text-cyan-800">Submit</Button>
          </form>
        </Form>
      </section>
      <Separator className="m-auto w-[80%] border-y border-cyan-800" orientation="horizontal"></Separator>
      <section className={"h-full w-full grid grid-cols-1 gap-4 p-4 ".concat((articles.length > 1) ? "md:grid-cols-2" : "")}>
        {articlesList}
      </section>
    </article>
  )
}