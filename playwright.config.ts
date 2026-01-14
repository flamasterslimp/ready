import { defineConfig } from '@playwright/test';

export default defineConfig({
    workers: 2,
    fullyParallel: false,
    reporter: 'html',

    use: {
        baseURL: 'https://lab.becomeqa.com',
        headless: false,
        testIdAttribute: 'data-test-id',
    },

    projects: [
        {
            name: 'setup',
            testMatch: /utils\/auth\.ts/,
        },
        {
            name: 'chromium',
            use: {
                storageState: 'data/user.json'
            },
            dependencies: ['setup'],
            testMatch: [
                'tests/**/*.spec.ts',
            ],
        },
    ],
});