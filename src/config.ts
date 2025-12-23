
import type { ThemeConfig } from "./types/config.types"

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://astro-chiri.netlify.app/', // Site domain
    title: 'gizn', // Site title
    author: 'gizn', // Author name
    description: 'Minimal blog built by Astro', // Site description
    language: 'en-US' // Default language
  },

  styling: {
    backgroundColor: '#F7F6F4',
    secondaryBG: '#f0efed',
    primaryColor: '#4A4A4A',
    secondaryColor: '#C2C2C2',
    accentColor: '#FF4F00',
  },

  // NAVIGATION ////////////////////////
  nav: [
    { href: "/", label: "Home" },
    { href: "/essays/", label: "Essays" },
    { href: "/about/", label: "About" },
  ],
  // SOCIAL ////////////////////////////
  social: [
    { href: "https://twitter.com/yourhandle", label: "Twitter", platform: "twitter" },
    { href: "https://github.com/yourhandle", label: "GitHub", platform: "github" },
    { href: "https://linkedin.com/in/yourhandle", label: "LinkedIn", platform: "linkedin" },
  ],
  // POST SETTINGS /////////////////////
  post: {
    showImage: false,
  },
}

