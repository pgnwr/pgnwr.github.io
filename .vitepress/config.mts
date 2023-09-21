import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "paganware",
  titleTemplate: ':title',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href:  '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href:  '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href:  '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href:  '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', color: '#5bbad5', href:  '/safari-pinned-tab.svg' }],
    ['link', { rel: 'msapplication-TileColor', sizes: '180x180', href:  '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#3e3546'}],
    ['meta', { name: 'apple-touch-icon', content: '#3e3546'}]
  
  ]
})
