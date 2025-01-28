import { useState, useEffect } from "react";

import EditorJS, { ToolConstructable } from '@editorjs/editorjs'

import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import List from '@editorjs/list'
import Table from '@editorjs/table'
import Warning from '@editorjs/warning'
import InlineCode from '@editorjs/inline-code'
import Delimiter from '@editorjs/delimiter'
import ImageTool from '@editorjs/image'

// @ts-ignore
import Code from '@coolbytes/editorjs-code'
// @ts-ignore
import Embed from '@editorjs/embed'
// @ts-ignore
import LinkTool from '@editorjs/link'
import { Button } from "@/components/ui/button";

/**
 * Opens the user's system file dialog prompting to download
 * the given data.
 * @author https://gist.github.com/Lehoczky/241f046b05c54af65918676888fc783f
 * 
 * @param fileName default name of the saved file. This is what will show up as file name in the user's file dialog.
 * @param data the content of the file.
 * @param mime [mime type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the file
 * @param bom
 */
export function download(
  fileName: string,
  data: string | ArrayBuffer | ArrayBufferView | Blob,
  mime = "text/plain",
  bom?: string | Uint8Array,
) {
  const blobData = bom === undefined ? [data] : [bom, data]
  const blob = new Blob(blobData, { type: mime })
  const a = document.createElement("a")

  a.download = fileName
  a.href = URL.createObjectURL(blob)
  a.click()
  setTimeout(() => {
    URL.revokeObjectURL(a.href)
    a.remove()
  }, 200)
}

export const ArticleEditorPage = () => {
  const [content, setContent] = useState("");

  const editor = new EditorJS({
    readOnly: false,
    holder: 'editor',
    autofocus: true,
    tools: {
      header: Header,
      quote: Quote,
      embed: Embed,
      image: {
        class: ImageTool,
        config: {
          uploader: {
            uploadByFile: async (file: File) => {
              console.log(file)
              console.log(`/${encodeURI(file.name)}`)

              return {
                success: 1,
                file: {
                  url: `/${encodeURI(file.name)}`,
                }
              }
            },
            uploadByUrl: async (url: string) => {
              console.log(url)
              console.log(`/${url.split('/')[-1]}`)

              return {
                success: 1,
                file: {
                  url: `/${url.split('/')[-1]}`,
                }
              }
            }
          }
        }
      },
      table: Table,
      warning: Warning,
      delimiter: Delimiter,
      code: {
        class: Code,
        config: {
          languages: [
            'plaintext', 'bash', 'sql', 'css', 'dockerfile', 'html',
            'xml', 'json', 'java', 'javascript', 'markdown', 'nginx',
            'powershell', 'python', 'rust', 'shell', 'terraform',
            'typescript', 'yaml'
          ],

        },
      },
      inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+M',
      },
      list: {
        class: List as unknown as ToolConstructable,
        inlineToolbar: true,
        config: {
          defaultStyle: 'unordered'
        },
      },
      linkTool: {
        class: LinkTool,
      },
    },
    data: JSON.parse(localStorage.getItem('content'))
  })

  const printMessage = (value: string) => {
    const message = document.getElementById('message')
    if (message)
      message.innerText = value
  }

  const saveToLocalStorage = () => {
    editor.save().then((outputData) => {
      localStorage.setItem('content', JSON.stringify(outputData))
      printMessage(`Document content saved at '${new Date().toLocaleString()}'`)
    }).catch((error) => {
      alert('Unable to save the data in Local Storage')
      console.log(error)
    })
  }

  const clearLocalStorage = () => {
    editor.clear()
    localStorage.removeItem("content")
    printMessage('')
  }

  const downloadJson = () => {
    editor.save().then((outputData) => {
      download('NewArticle', JSON.stringify(outputData), 'application/json')
    }).catch((error) => {
      alert('Unable to generate a downloadable data')
      console.log(error)
    })
  }

  setInterval(saveToLocalStorage, 60000)

  return (
    <div className="pt-20">
      <article id="editor"></article>
      <div className="grid grid-cols-2 gap-4">
        <p id="message" className="bg-cyan-800 text-cyan-100 rounded-sm p-4 col-span-2"></p>
        <Button onClick={saveToLocalStorage} className="text-cyan-800 hover:text-cyan-100 hover:bg-cyan-800">Save</Button>
        <Button onClick={clearLocalStorage} className="text-cyan-800 hover:text-cyan-100 hover:bg-cyan-800">Clear</Button>
        <Button onClick={downloadJson} className="col-span-2 text-cyan-800 hover:text-cyan-100 hover:bg-cyan-800">Download</Button>
      </div>
    </div>
  )
}