import { test as base } from '@playwright/test';
import { HomeActions } from '../pages/home/home.actions';
import { LoginActions } from '../pages/login/login.actions';

/**
 * Page Fixtures - Provides action classes to tests
 * Tests only import actions, which contain locators internally
 */
type PageFixtures = {
    homeActions: HomeActions;
    loginActions: LoginActions;
};

// Extend base test with all page action objects
export const test = base.extend<PageFixtures>({
    homeActions: async ({ page }, use) => {
        await use(new HomeActions(page));
    },
    loginActions: async ({ page }, use) => {
        await use(new LoginActions(page));
    }
});

export { expect } from '@playwright/test';