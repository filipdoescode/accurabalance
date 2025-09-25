import React from "react"
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"
import { RichText } from "@payloadcms/richtext-lexical/react"

interface RichTextProps {
  data: SerializedEditorState
}

export function RichTextToJSX({ data }: RichTextProps) {
  return <RichText data={data} />
}
