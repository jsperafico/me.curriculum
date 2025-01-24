import EditorJS, { ToolConstructable } from '@editorjs/editorjs'

import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import List from '@editorjs/list'
import Table from '@editorjs/table'
import Warning from '@editorjs/warning'
import InlineCode from '@editorjs/inline-code'
import Delimiter from '@editorjs/delimiter'

// @ts-ignore
import Code from '@coolbytes/editorjs-code'
// @ts-ignore
import Embed from '@editorjs/embed'
// @ts-ignore
import SimpleImage from '@editorjs/simple-image'
// @ts-ignore
import LinkTool from '@editorjs/link'

export const ArticleNewPage = () => {
  const editor = new EditorJS({
    readOnly: false,
    holder: 'editor',
    tools: {
      header: Header,
      quote: Quote,
      embed: Embed,
      image: SimpleImage,
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
  })

  return (
    <article id="editor"></article>
  )
}