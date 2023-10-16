import { createI18n } from 'vue-i18n';

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
    Object.entries(
        // glob yaml/yml/ts files
        import.meta.glob<{ default: any }>(
            '../../locales/*.{yaml,yml,ts,json}',
            {
                eager: true,
            },
        ),
    ).map(([key, value]) => {
        if (key.endsWith('.ts')) {
            return [key.slice(14, -3), value.default];
        }
        const yaml = key.endsWith('.yaml');
        return [key.slice(14, yaml ? -5 : -4), value.default];
    }),
);

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
});

export { i18n };
