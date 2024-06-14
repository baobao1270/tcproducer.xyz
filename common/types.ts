export interface Color {
  background: string;
  foreground: string;
}

export interface NameColorCollection {
  [key: string]: Color;
}

export interface Article {
  path: string;
  meta: Record<string, any>;
}

export interface Link {
  name: string;
  url: string;
}

export interface SocialNetworkLink extends Link {
  icon: string;
}

export interface ArtworkResource {
  type: string;
}

export interface ArtworkExternalResource extends ArtworkResource {
  platform: 'bilibili' | 'youtube' | 'vsqx.top';
  resource: string;
}

export interface ArtworkAttachmentResource extends ArtworkResource {
  type: 'project' | 'audio' | 'video';
  spec: string;
}

export interface PackageInfo {
  name: string
  license: string
  license_text: string
  repository: string
  dependencies: { [key: string]: string }
}

export interface SiteConfig {
  name: string
  title: string
  slogan: string
  canonical: string
  description: string
  contact_email: string
  social_networks: SocialNetworkLink[]
  footer: Link[]
}

export interface Artwork {
  id: number
  title: string
  singer: string
  original?: string
  engine?: string
  external: ArtworkExternalResource[]
  attachments: ArtworkAttachmentResource[]
}
