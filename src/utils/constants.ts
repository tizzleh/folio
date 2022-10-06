export const ORIGIN =
  process.env.NEXT_PUBLIC_HOST ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  ('jurre.me' as const)
export const PROTOCOL = process.env.NODE_ENV === 'production' ? 'https' : 'http'
export const HOST = `${PROTOCOL}://${ORIGIN}` as const

export const SEPARATOR = ' | '

export const SITE_TITLE = "Ty Harlacker's Site"
export const SITE_TITLE_TEMPLATE = `${SITE_TITLE} ${SEPARATOR} %s`
export const SHORT_DESCRIPTION = "Ty's personal website & portfolio"
export const DEFAULT_DESCRIPTION = `Hi, I'm Ty; a full-stack developer, Computer Science student, and entrepreneur from The US!`

export const DEFAULT_IMAGE_URL = `/img/banner.png`

