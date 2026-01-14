import { Locator, Page } from '@playwright/test';

/**
 * LoginLocators - Contains locators specific to the Login page
 */
export class LoginLocators {
    // Static locators - form elements
    readonly loginButton: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginSubmitButton: Locator;
    readonly errorMessage: Locator;

    constructor(private page: Page) {
        // Using data-test-id attributes (best practice)
        this.loginButton = page.locator('[data-test-id="login-button"]');
        this.usernameInput = page.locator('[data-test-id="username-input"]');
        this.passwordInput = page.locator('[data-test-id="password-input"]');
        this.loginSubmitButton = page.locator('[data-test-id="login-submit-button"]');

        // Error messages
        this.errorMessage = page.locator('.error-message');
    }

    // Dynamic locators
    errorByText(errorText: string): Locator {
        return this.page.getByText(errorText);
    }

    // Computed locators
    get loginForm(): Locator {
        return this.page.locator('form[id="login-form"]');
    }
}