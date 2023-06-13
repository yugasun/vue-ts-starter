import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import * as path from 'path';
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';
import { createHtmlPlugin } from 'vite-plugin-html';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import Unocss from 'unocss/vite';

const pwaOptions: Partial<VitePWAOptions> = {
    mode: 'development',
    base: '/',
    includeAssets: ['favicon.svg'],
    manifest: {
        name: 'PWA Router',
        short_name: 'PWA Router',
        theme_color: '#ffffff',
        icons: [
            {
                src: 'pwa-192x192.png', // <== don't add slash, for testing
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/pwa-512x512.png', // <== don't remove slash, for testing
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: 'pwa-512x512.png', // <== don't add slash, for testing
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
            },
        ],
    },
    devOptions: {
        enabled: process.env.SW_DEV === 'true',
        /* when using generateSW the PWA plugin will switch to classic */
        type: 'module',
        navigateFallback: 'index.html',
    },
};

const claims = process.env.CLAIMS === 'true';
const reload = process.env.RELOAD_SW === 'true';

if (process.env.SW === 'true') {
    pwaOptions.srcDir = 'src';
    pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts';
    pwaOptions.strategies = 'injectManifest';
    (pwaOptions.manifest as Partial<ManifestOptions>).name =
        'PWA Inject Manifest';
    (pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject';
}

if (claims) pwaOptions.registerType = 'autoUpdate';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/styles/element/index.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        createHtmlPlugin({
            minify: true,
            /**
             * Data that needs to be injected into the index.html ejs template
             */
            inject: {
                data: {
                    title: 'vue-ts-starter',
                },
            },
        }),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'vue-i18n',
                'vue/macros',
                '@vueuse/head',
                '@vueuse/core',
            ],
            resolvers: [ElementPlusResolver()],
            dts: 'src/auto-imports.d.ts',
            vueTemplate: true,
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),

        // https://github.com/antfu/unocss
        // see unocss.config.ts for config
        Unocss(),

        VitePWA(pwaOptions),

        // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            strictMessage: false,
            fullInstall: true,
            include: [path.resolve(__dirname, 'locales/**')],
        }),

        replace({
            preventAssignment: true,
            __DATE__: new Date().toISOString(),
            __RELOAD_SW__: reload ? 'true' : '',
        }),
    ],
    server: {
        port: 8080,
        hmr: {
            host: '127.0.0.1',
            port: 8080,
        },
    },
});
