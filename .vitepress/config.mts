import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Paganware",
  description: "Paganware MB Site",
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href:  '/assets/img/fav/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href:  '/assets/img/fav/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href:  '/assets/img/fav/favicon-16x16.png' }],
    // ['link', { rel: 'manifest', href:  '/assets/img/fav/site.webmanifest' }],
    ['link', { rel: 'mask-icon', color: '#5bbad5', href:  '/assets/img/fav/safari-pinned-tab.svg' }],
    ['link', { rel: 'msapplication-TileColor', sizes: '180x180', href:  '/assets/img/fav/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#3e3546'}],
    ['meta', { name: 'apple-touch-icon', content: '#3e3546'}]
  
  ]


//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'Examples', link: '/markdown-examples' }
//     ],

//     sidebar: [
//       {
//         text: 'Examples',
//         items: [
//           { text: 'Markdown Examples', link: '/markdown-examples' },
//           { text: 'Runtime API Examples', link: '/api-examples' }
//         ]
//       }
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ]
//   }
})
