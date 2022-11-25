const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://github.com/kmj8843/postmanner',
    gaTrackingId: null,
    trailingSlash: true,
    static: true,
  },
  header: {
    logo: '',
    logoLink: 'http://groupware.pencilstudio.co.kr',
    title: "API 명세서",
    githubUrl: 'https://gitlab.emotion.co.kr/ep/groupware/groupware-api',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction/index.html', // add trailing slash if enabled above
      '/codeblock/index.html',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: '', link: '' }],
    frontLine: false,
    ignoreIndex: true,
    title: "<a href='https://github.com/kmj8843/postmanner'>Postmanner </a>",
  },
  siteMetadata: {
    title: 'postmanner',
    description: '그룹웨어 API 명세서',
    ogImage: null,
    docsLocation: 'https://gitlab.emotion.co.kr/ep/groupware/groupware-api',
    favicon: 'https://www.postman.com/_ar-assets/images/favicon-1-48.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Postmanner',
      short_name: 'Postmanner',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
