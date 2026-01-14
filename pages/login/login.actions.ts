import { Page, expect } from '@playwright/test';
import { BaseActions } from '../base/base.actions';
import { LoginLocators } from './login.locators';

/**
 * LoginActions - Contains actions specific to the Login page
 * Extends BaseActions to inherit common functionality
 */
export class LoginActions extends BaseActions {
    readonly loginLocators: LoginLocators;

    constructor(page: Page) {
        super(page); // Initialize base actions
        this.loginLocators = new LoginLocators(page);
    }

    // === NAVIGATION ACTIONS ===

    async navigateToLoginPage(): Promise<void> {
        // Uses base action to click My Account
        await this.navigateToMyAccount();
    }

    // === LOGIN ACTIONS ===

    async performLogin(username: string, password: string): Promise<void> {
        await this.loginLocators.loginButton.click();
        await this.loginLocators.usernameInput.fill(username);
        await this.loginLocators.passwordInput.fill(password);
        await this.loginLocators.loginSubmitButton.click();
    }

    async submitEmptyLoginForm(): Promise<void> {
        await this.loginLocators.loginButton.click();
        await this.loginLocators.loginSubmitButton.click();
    }

    // === ASSERTION METHODS ===

    async expectLoginFormVisible(): Promise<void> {
        await expect(this.loginLocators.loginForm).toBeVisible();
    }

    async expectErrorMessage(errorText: string): Promise<void> {
        await expect(this.loginLocators.errorByText(errorText)).toBeVisible();
    }

    async expectSuccessfulLogin(): Promise<void> {
        // Wait for 'My Account' text to confirm login
        await this.page.waitForSelector('text=My Account');
    }
}