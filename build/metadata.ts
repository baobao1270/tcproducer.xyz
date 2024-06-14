import packageInfo from '../package.json'
import fs from 'fs'
import path from 'path'
import yaml from 'yaml'
import { IconDefinition, IconPack } from '@fortawesome/fontawesome-common-types'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { PROJECT_ROOT, DATA_DIRECTORY, ARTICLE_DIRECTORY, REQUIRED_ICONS } from './consts'
import { PackageInfo, SiteConfig, Artwork, Article } from '../common/types'
import { renderMarkdown } from '../common/markdown'

function loadFile(path: string): string {
  return fs.readFileSync(path, { encoding: 'utf-8' })
}

function loadYaml<T>(filename: string): T {
  return yaml.parse(loadFile(path.join(DATA_DIRECTORY, filename))) as T
}

function loadArticles(): Article[] {
  const files = fs
    .readdirSync(ARTICLE_DIRECTORY, { recursive: true })
    .filter(file => typeof file === 'string')
    .map(file => file as string)
    .map(file => file.replace('\\', '/'))   // Windows compatibility
    .filter(file => file.endsWith('.md'))   // Markdown files only
    .filter(file => !file.startsWith('_'))  // Exclude drafts
    .filter(file => !file.startsWith('.'))  // Exclude hidden files
  return files.map(file => {
    const slug = file.replace(/\.md$/, '')
    const markdownContent = loadFile(path.join(ARTICLE_DIRECTORY, file))
    const markdownRendered = renderMarkdown(markdownContent)
    return {
      path: `/${slug}`,
      meta: markdownRendered.meta,
    }
  })
}

function loadIcon(exprs: string[]): IconDefinition[] {
  const iconPackMapping: Record<string, IconPack> = { brands: fab, solid: fas, regular: far }
  return exprs.map(expr => {
    const [kitName, iconName] = expr.split('/')
    const iconProperty = 'fa' + iconName
      .split('-')
      .map((word, _) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('')
    return iconPackMapping[kitName][iconProperty]
  })
}

const licenseText = loadFile(path.join(PROJECT_ROOT, 'LICENSE'))
const site: SiteConfig = loadYaml('config.yml')
const artworks: Artwork[] = loadYaml('artworks.yml')
const articles: Article[] = loadArticles()
const icons = loadIcon([
  ...REQUIRED_ICONS,
  ...site.social_networks.map(x => x.icon),
])

export default {
  package: { ...packageInfo, license_text: licenseText } as PackageInfo,
  site,
  artworks,
  articles,
  icons,
}
