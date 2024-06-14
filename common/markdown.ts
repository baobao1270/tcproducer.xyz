import MarkdownIt from 'markdown-it'
import MarkdownItMeta from 'markdown-it-meta'

type MarkdownMetadata = Record<string, any>

export interface MarkdownRendered {
  meta: MarkdownMetadata;
  contentHtml: string;
}

export function renderMarkdown(markdownContent: string): MarkdownRendered {
  const render = new MarkdownIt({ html: true })
  render.use(MarkdownItMeta)
  const contentHtml = render.render(markdownContent)
  return {
    meta: (render as any).meta as MarkdownMetadata,
    contentHtml,
  }
}
