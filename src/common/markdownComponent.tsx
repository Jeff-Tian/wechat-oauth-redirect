import Markdown from "markdown-to-jsx"
import React from "react"

export const markdownComponent = (markdownFile: string) => () =>
    <Markdown>{import((`!!raw-loader!./${markdownFile}`))}</Markdown>
