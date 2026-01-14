import { Locator, Page } from '@playwright/test';

/**
 * HomeLocators - Contains locators specific to the Home page
 */
export class HomeLocators {
    // Add your home page locators here as needed
    // Example static locators:
    readonly heroSection: Locator;
    readonly searchBar: Locator;

    constructor(private page: Page) {
        // Initialize your home page locators
        this.heroSection = page.locator('.hero-section');
        this.searchBar = page.locator('input[type="search"]');
    }

    // Dynamic locators - examples
    productByName(productName: string): Locator {
        return this.page.locator(`[data-product-name="${productName}"]`);
    }

    // Computed locators - examples
    get featuredProducts(): Locator {
        return this.page.locator('.featured-products');
    }
}