import { Page, expect } from '@playwright/test';
import { BaseLocators } from './base.locators';

/**
 * BaseActions - Contains common actions used across all pages
 * Actions use locators from BaseLocators class
 */
export class BaseActions {
    readonly locators: BaseLocators;

    constructor(protected page: Page) {
        this.locators = new BaseLocators(page);
    }

    // === NAVIGATION ACTIONS ===

    async navigateToMyAccount(): Promise<void> {
        await this.locators.myAccountLink.click();
    }

    async logOut(): Promise<void> {
        await this.locators.logOutBtn.click();
    }

    async clickLinkByName(name: string): Promise<void> {
        await this.locators.linkByName(name).click();
    }

    // === ASSERTION METHODS ===

    async expectMyAccountLinkVisible(): Promise<void> {
        await expect(this.locators.myAccountLink).toBeVisible();
    }

    async expectLoggedOut(): Promise<void> {
        await expect(this.locators.logOutBtn).toBeHidden();
    }

    async expectURL(expectedURL: string): Promise<void> {
        await expect(this.page).toHaveURL(expectedURL);
    }
}