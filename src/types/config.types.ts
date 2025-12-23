export interface ThemeConfig {
  site: {
    website: string;
    title: string;
    author: string;
    description: string;
    language: string;
  };
  styling: {
    backgroundColor: string;
    secondaryBG: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
  nav: {
    href: string;
    label: string;
  }[];
  social: {
    href: string;
    label: string;
    platform: string;
  }[];
  post: {
    showImage: boolean;
  };
}