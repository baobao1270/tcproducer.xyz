import { CSSProperties } from "vue";
import { Artwork, ArtworkAttachmentResource, NameColorCollection } from "@common/types";

export const SINGER_NAMED_COLORS: NameColorCollection = {
  '初音ミク': { background: '#39c5bb', foreground: '#fff' },
  '洛天依':   { background: '#66ccff', foreground: '#fff' },
  '乐正绫':   { background: '#ee0000', foreground: '#fff' },
  '夏語遙':   { background: '#33cccc', foreground: '#fff' },
  '心華':     { background: '#ee82ee', foreground: '#fff' },
  'SV口哨':   { background: '#328b34', foreground: '#fff' },
};

export const ENGINE_NAMED_COLORS: NameColorCollection = {
  'V4':            { background: '#007acc', foreground: '#fff' },
  'V5':            { background: '#007acc', foreground: '#fff' },
  'ACE':           { background: '#5d59ff', foreground: '#fff' },
  'Synthesizer V': { background: '#328b34', foreground: '#fff' },
  'DiffSinger':    { background: '#ff71a3', foreground: '#fff' },
};

export function singerColor(singer: string): CSSProperties {
  let name = singer
  const suffix = ['AI', 'DS', 'SV']
  suffix.forEach(element => {
    if (singer.endsWith(element)) name = singer.slice(0, -2)
  })
  const result = SINGER_NAMED_COLORS[name]
  return {
    backgroundColor: result.background,
    color: result.foreground,
  }
}

export function engineColor(engine: string): CSSProperties {
  const result = ENGINE_NAMED_COLORS[engine]
  return {
    backgroundColor: result.background,
    color: result.foreground,
  }
}

export function attachmentSpecIcon(attachment: ArtworkAttachmentResource): string[] {
  if (attachment.type === 'project') return ['fas', 'diagram-project']
  if (attachment.type === 'video')   return ['fas', 'film']
  if (attachment.type === 'audio')   return ['fas', 'headphones']
  return ['fas', 'file']
}


export function externalUrl(artwork: Artwork, platform: string): string | null {
  const external = artwork.external.find((link) => link.platform === platform)
  if (!external) return null
  if (platform === 'bilibili') return `https://www.bilibili.com/video/${external.resource}`
  if (platform === 'youtube')  return `https://www.youtube.com/watch?v=${external.resource}`
  return null
}

export function attachmentUrl(artwork: Artwork, type: string): string | null {
  const attachment = artwork.attachments.find((attachment) => attachment.type === type)
  if (!attachment) return null
  let url = '/downloads/artworks/'

  if (type === 'project') {
    url += encodeURIComponent(`${artwork.id} [${artwork.title}] ${artwork.singer}`)
    if (artwork.original) url += encodeURIComponent(` Cover ${artwork.original}`)
    return `${url}.zip`
  }

  if (type === 'audio') {
    url += encodeURIComponent(`${artwork.singer} - ${artwork.title}`)
    if (artwork.original) url += encodeURIComponent(` (Cover ${artwork.original})`)
    return `${url}.flac`
  }

  if (type === 'video') {
    url += encodeURIComponent(`${artwork.singer} - ${artwork.title}`)
    if (artwork.original) url += encodeURIComponent(` (Cover ${artwork.original})`)
    url += encodeURIComponent(' - PV')
    return `${url}.mp4`
  }

  return null
}
