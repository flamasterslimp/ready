import { Page, expect } from '@playwright/test';
import { BaseActions } from '../base/base.actions';
import { HomeLocators } from './home.locators';

/**
 * HomeActions - Contains actions specific to the Home page
 * Extends BaseActions to inherit common functionality
 */
export class HomeActions extends BaseActions {
    readonly homeLocators: HomeLocators;

    constructor(page: Page) {
        super(page); // Initialize base actions (includes base.locators)
        this.homeLocators = new HomeLocators(page);
    }

    // === NAVIGATION ACTIONS ===

    async navigateToHome(): Promise<void> {
        // Uses baseURL from playwright.config.ts
        await this.page.goto('/');
    }

    // === PAGE-SPECIFIC ACTIONS ===

    async searchForProduct(productName: string): Promise<void> {
        await this.homeLocators.searchBar.fill(productName);
        await this.homeLocators.searchBar.press('Enter');
    }

    async selectProduct(productName: string): Promise<void> {
        await this.homeLocators.productByName(productName).click();
    }

    // === ASSERTION METHODS ===

    async expectHomePageURL(path: string = '/'): Promise<void> {
        await expect(this.page).toHaveURL(path);
    }

    async expectHeroSectionVisible(): Promise<void> {
        await expect(this.homeLocators.heroSection).toBeVisible();
    }

    async expectFeaturedProductsVisible(): Promise<void> {
        await expect(this.homeLocators.featuredProducts).toBeVisible();
    }
}