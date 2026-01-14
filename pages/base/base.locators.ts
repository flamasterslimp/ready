import { Locator, Page } from '@playwright/test';

/**
 * BaseLocators - Contains common locators used across all pages
 * These elements appear on every page (header, footer, navigation)
 */
export class BaseLocators {
    // Static locators - initialized in constructor
    readonly myAccountLink: Locator;
    readonly logOutBtn: Locator;

    constructor(private page: Page) {
        // Common navigation elements
        this.myAccountLink = page.getByRole('link', { name: 'My Account' });
        this.logOutBtn = page.getByText('Log Out');
    }

    // Dynamic locators - function-based for parameters
    linkByName(name: string): Locator {
        return this.page.getByRole('link', { name });
    }

    // Computed locators - 'get' keyword, always fresh
    get mainNavigation(): Locator {
        return this.page.locator('nav[role="navigation"]');
    }
}