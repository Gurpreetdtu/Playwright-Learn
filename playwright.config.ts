
import { defineConfig } from '@playwright/test';

export default defineConfig({

    testDir: './Test',

    timeout: 30000,

    use: {
        browserName: 'chromium',
        headless: true,
        baseURL: 'https://ecommerce-playground.lambdatest.io'
    },

    reporter: 'html'

});
