import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    lang: 'en-US',
    title: 'More',
    description: 'An easy blog by cnhjp',

    bundler: '@vuepress/bundler-vite',

    themeConfig: {
        logo: 'logo.svg',
        repo: 'https://github.com/cnhjp/cnhjp.github.io'
    },

    plugins: ['@vuepress/search'],

    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
    ]

})