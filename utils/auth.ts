import { test as setup, Page } from '@playwright/test';
import { LoginActions } from '../pages/login/login.actions';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const auth_file = 'playwright/.auth/user.json';

/**
 * Login via UI using LoginActions
 */
export async function loginViaUI(page: Page, username: string, password: string) {
    const loginActions = new LoginActions(page);

    await page.goto('/');
    await loginActions.performLogin(username, password);
    await loginActions.expectSuccessfulLogin();
}

/**
 * Setup authentication before tests
 */
setup('authenticate', async ({ page }) => {
    // Create auth directory if it doesn't exist
    const auth_dir = path.dirname(auth_file);

    if (!fs.existsSync(auth_dir)) {
        fs.mkdirSync(auth_dir, { recursive: true });
    }

    await loginViaUI(page, process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
    await page.context().storageState({ path: auth_file });
});