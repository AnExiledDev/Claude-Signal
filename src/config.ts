import type {
  AnalyticsConfig,
  CommentConfig,
  GithubConfig,
  Link,
  PhotosConfig,
  PostConfig,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: 'Claude Signal',
  description:
    'Independent Claude news, guides, and analysis. Covering features, workflows, deep dives, and careful speculation about Claude AI.',
  website: 'https://anexileddev.github.io/Claude-Signal/',
  lang: 'en',
  base: '/Claude-Signal',
  author: 'Claude Signal',
  ogImage: '/og-image.webp',
  transition: false,
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Signals',
    url: '/tags/signals',
  },
  {
    name: 'Deep Dives',
    url: '/tags/deep-dives',
  },
  {
    name: 'Workflows',
    url: '/tags/workflows',
  },
  {
    name: 'Guides',
    url: '/tags/guides',
  },
  {
    name: 'All Posts',
    url: '/posts',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Signals',
    url: '/tags/signals',
  },
  {
    name: 'Deep Dives',
    url: '/tags/deep-dives',
  },
  {
    name: 'Workflows',
    url: '/tags/workflows',
  },
  {
    name: 'Rumors',
    url: '/tags/rumors',
  },
  {
    name: 'Guides',
    url: '/tags/guides',
  },
  {
    name: 'Changelog',
    url: '/tags/changelog',
  },
  {
    name: 'All Tags',
    url: '/tags',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/AnExiledDev/Claude-Signal',
    icon: 'icon-[ri--github-fill]',
  },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: false,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'JavaScript',
          icon: 'icon-[mdi--language-javascript]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'CSS',
          icon: 'icon-[mdi--language-css3]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
          name: 'HTML',
          icon: 'icon-[mdi--language-html5]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          name: 'TypeScript',
          icon: 'icon-[mdi--language-typescript]',
          url: 'https://www.typescriptlang.org/',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Astro',
          icon: 'icon-[lineicons--astro]',
          url: 'https://astro.build/',
        },
        {
          name: 'Node.js',
          icon: 'icon-[mdi--nodejs]',
          url: 'https://nodejs.org/',
        },
        {
          name: 'React',
          icon: 'icon-[mdi--react]',
          url: 'https://react.dev/',
        },
        {
          name: 'Next.js',
          icon: 'icon-[devicon--nextjs]',
          url: 'https://nextjs.org/',
        },
        {
          name: 'Tailwind CSS',
          icon: 'icon-[mdi--tailwind]',
          url: 'https://tailwindcss.com/',
        },
        {
          name: 'Iconify',
          icon: 'icon-[line-md--iconify2-static]',
          url: 'https://iconify.design/',
        },
      ],
    },
    {
      direction: 'left',
      skills: [
        {
          name: 'Ubuntu',
          icon: 'icon-[mdi--ubuntu]',
          url: 'https://ubuntu.com/',
        },
        {
          name: 'Git',
          icon: 'icon-[mdi--git]',
          url: 'https://git-scm.com/',
        },
        {
          name: 'MongoDB',
          icon: 'icon-[lineicons--mongodb]',
          url: 'https://www.mongodb.com/',
        },
        {
          name: 'Vercel',
          icon: 'icon-[lineicons--vercel]',
          url: 'https://vercel.com/',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  GITHUB_USERNAME: 'AnExiledDev',
  TOOLTIP_ENABLED: true,
}

//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Claude Signal - Independent Claude news and analysis',
  introduce: 'News, guides, deep dives, and analysis about Claude AI.',
  author: 'Claude Signal',
  homePageConfig: {
    size: 5,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
  recommendText: 'REC',
  wordCountView: true,
}

export const COMMENT_CONFIG: CommentConfig = {
  enabled: false,
  system: 'gitalk',
  gitalk: {
    clientID: import.meta.env.PUBLIC_GITHUB_CLIENT_ID,
    clientSecret: import.meta.env.PUBLIC_GITHUB_CLIENT_SECRET,
    repo: 'gitalk-comment',
    owner: 'Dnzzk2',
    admin: ['Dnzzk2'],
    language: 'en-US',
    perPage: 5,
    pagerDirection: 'last',
    createIssueManually: false,
    distractionFreeMode: false,
    enableHotKey: true,
  },
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Categories',
  description: 'Browse by category',
  introduce: 'Explore content by category: Signals, Deep Dives, Workflows, Rumors, Guides, and Changelog.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: 'The examples of my projects.',
  introduce: 'The examples of my projects.',
}

export const PHOTOS_CONFIG: PhotosConfig = {
  title: 'Photos',
  description: 'Here I will record some photos taken in daily life.',
  introduce: 'Here I will record some photos taken in daily life.',
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  vercount: {
    enabled: false,
  },
  umami: {
    enabled: false,
    websiteId: 'Your websiteId in umami',
    serverUrl: 'https://cloud.umami.is/script.js',
  },
}
