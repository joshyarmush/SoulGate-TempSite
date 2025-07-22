'use client'

import { siteConfig } from './config'
import SocialsPageLetterbox from './page-letterbox'
import SocialsPageFullscreen from './page-fullscreen'

export default function SocialsPage() {
  if (siteConfig.displayMode === 'fullscreen') {
    return <SocialsPageFullscreen />
  }
  
  return <SocialsPageLetterbox />
}