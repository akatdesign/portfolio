// @ts-nocheck
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        scss: {
            additionalData: `@import "src/styles/_responsive.scss", "src/styles/_color.scss", "src/styles/_button1.scss";`
        }
    }
});
