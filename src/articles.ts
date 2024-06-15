import { Route } from '@/routes'
import Article from '@/pages/Article.vue'

const articles = Object
  .entries(import.meta.glob('@data/articles/**/*.md', { query: '?raw' }))
  .map(([path, loader]) => [
    path.replace(new RegExp('^[@/]?data/articles/(.*)\.md[\?raw]?$'), '/$1'),
    loader,
  ])

export function articleRoutes(): Route[] {
  return $articles.map(article => ({
    path: article.path,
    meta: article.meta,
    component: Article,
  }))
}

export async function renderArticle(path: string): Promise<string> {
  const { renderMarkdown } = await import('@common/markdown')
  const loader = Object.fromEntries(articles)[path]
  if (!loader) return '找不到文章'
  const { default: markdownContent } = await loader()
  const { contentHtml } = renderMarkdown(markdownContent)
  return contentHtml
}
