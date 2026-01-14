import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Essential Level - Must Know Blindfolded', () => {
    test('PW01 - Setup Playwright and first test', async ({ page, homeActions }) => {
        // Navigate to the website using home actions
        await homeActions.navigateToHome();

        // Log the URL in terminal
        console.log('We are visiting website: ' + page.url());

        // Assert we're on the home page
        await homeActions.expectHomePageURL('/');

        // ========================================
        // HOMEWORK
        // ========================================
        // Research these topics:
        // - What does npm install actually do?
        // - What is Mocha and how does it relate to testing?
        // - Why might Playwright be better than Cypress?
        // ========================================
    });

    test('PW02 - same 2', async ({ page, homeActions }) => {
        // Navigate to the website using home actions
        await homeActions.navigateToHome();

        // Log the URL in terminal
        console.log('We are visiting website: ' + page.url());

        // Assert we're on the home page
        await homeActions.expectHomePageURL('/');

        // ========================================
        // HOMEWORK
        // ========================================
        // Research these topics:
        // - What does npm install actually do?
        // - What is Mocha and how does it relate to testing?
        // - Why might Playwright be better than Cypress?
        // ========================================
    });

    test('PW03 - same 3', async ({ page, homeActions }) => {
        // Navigate to the website using home actions
        await homeActions.navigateToHome();

        // Log the URL in terminal
        console.log('We are visiting website: ' + page.url());

        // Assert we're on the home page
        await homeActions.expectHomePageURL('/');

        // ========================================
        // HOMEWORK
        // ========================================
        // Research these topics:
        // - What does npm install actually do?
        // - What is Mocha and how does it relate to testing?
        // - Why might Playwright be better than Cypress?
        // ========================================
    });


    // test('PW02 - Using multiple page actions', async ({ page, homeActions, loginActions }) => {
    //     // Navigate to home
    //     await homeActions.navigateToHome();

    //     // Navigate to login using login actions
    //     await loginActions.navigateToLoginPage();

    //     // Try submitting empty form to see error
    //     await loginActions.submitEmptyLoginForm();

    //     // Verify error appears
    //     await loginActions.expectErrorMessage('Username is required');

    //     // Now perform actual login
    //     await loginActions.performLogin('testuser', 'testpass');
    // });

    // test('PW03 - Using base actions from any page', async ({ loginActions }) => {
    //     // Login actions extends BaseActions, so we can use base methods too!
    //     await loginActions.navigateToMyAccount(); // Base action
    //     await loginActions.expectMyAccountLinkVisible(); // Base assertion

    //     // And page-specific actions
    //     await loginActions.submitEmptyLoginForm(); // Login-specific action
    // });

    // test('PW04 - Accessing locators when needed', async ({ homeActions }) => {
    //     await homeActions.navigateToHome();

    //     // Actions have locators property if you need direct access
    //     // Useful for custom assertions or complex interactions
    //     const heroLocator = homeActions.homeLocators.heroSection;
    //     await expect(heroLocator).toBeVisible();

    //     // But prefer using action methods for consistency
    //     await homeActions.expectHeroSectionVisible(); // Better approach
    // });

    // // COMMENTED OUT TESTS - Uncomment and adapt as needed
    // // test('03 - Basic Actions (click, type, fill, check, select)', async ({ page }) => {
    // //     await page.goto('https://becomeqa.com');
    // //     const firstLink = page.locator('a').first();
    // //     await firstLink.click();
    // //     await page.goBack();
    // //     const searchInput = page.locator('input[type="search"]');
    // //     await searchInput.fill('playwright testing');
    // //     await searchInput.clear();
    // //     await searchInput.type('slow typing');
    // //     const checkbox = page.locator('input[type="checkbox"]');
    // //     await checkbox.check();
    // //     const dropdown = page.locator('select');
    // //     await dropdown.selectOption('option-value');
    // //     const saveButton = page.locator('button[type="submit"]');
    // //     await saveButton.click();
    // //     await page.pause();
    // // });

    // // test('04 - Auto-waiting & Timeouts', async ({ page }) => {
    // //     await page.goto('https://becomeqa.com');
    // //     const submitButton = page.locator('button[type="submit"]');
    // //     await submitButton.click();
    // //     const successMessage = page.locator('.success-message');
    // //     await successMessage.waitFor();
    // //     const loadingSpinner = page.locator('.loading');
    // //     await loadingSpinner.waitFor({ state: 'hidden' });
    // //     const slowElement = page.locator('.slow-loading');
    // //     await slowElement.click({ timeout: 5000 });
    // //     const saveButton = page.locator('#save');
    // //     await saveButton.click();
    // //     await page.locator('.saved-successfully').waitFor();
    // //     await page.pause();
    // // });

    // // test('05 - Assertions (expect().toBeVisible(), toHaveText(), etc.)', async ({ page }) => {
    // //     await page.goto('https://becomeqa.com');
    // //     const header = page.locator('h1');
    // //     await expect(header).toBeVisible();
    // //     await expect(header).toHaveText('BecomeQA');
    // //     await expect(header).toContainText('Become');
    // //     await expect(page).toHaveURL('https://becomeqa.com');
    // //     await expect(page).toHaveTitle(/BecomeQA/);
    // //     const firstLink = page.locator('a').first();
    // //     await expect(firstLink).toBeEnabled();
    // //     const searchInput = page.locator('input[type="search"]');
    // //     await searchInput.fill('test value');
    // //     await expect(searchInput).toHaveValue('test value');
    // //     const loadingSpinner = page.locator('.loading');
    // //     await expect(loadingSpinner).toBeHidden();
    // //     await page.pause();
    // // });

    // // test('06 - Screenshots (page.screenshot() - essential for debugging)', async ({ page }) => {
    // //     await page.goto('https://becomeqa.com');
    // //     await page.screenshot({ path: 'screenshots/full-page.png', fullPage: true });
    // //     await page.screenshot({ path: 'screenshots/viewport-only.png' });
    // //     const header = page.locator('h1');
    // //     await header.screenshot({ path: 'screenshots/header-element.png' });
    // //     await page.screenshot({ path: 'screenshots/step1-homepage.png' });
    // //     const firstLink = page.locator('a').first();
    // //     await firstLink.click();
    // //     await page.screenshot({ path: 'screenshots/step2-after-click.png' });
    // //     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    // //     await page.screenshot({ path: `screenshots/test-${timestamp}.png` });
    // //     const searchInput = page.locator('input[type="search"]');
    // //     await page.screenshot({ path: 'screenshots/before-typing.png' });
    // //     await searchInput.fill('test search');
    // //     await page.screenshot({ path: 'screenshots/after-typing.png' });
    // //     await page.pause();
    // // });

    // // test('07 - Basic imports', async ({ page }) => {
    // //     await page.goto('https://becomeqa.com');
    // //     const header = page.locator('h1');
    // //     await expect(header).toBeVisible();
    // //     console.log('test = creates test cases');
    // //     console.log('expect = creates assertions');
    // //     console.log('page = comes from test fixture');
    // //     await page.pause();
    // // });

    // // test('08 - Fixture destructuring', async ({ page, browser, context }) => {
    // //     await page.goto('https://becomeqa.com');
    // //     console.log('Page is a single browser tab');
    // //     console.log('Browser can create multiple pages:');
    // //     const page2 = await browser.newPage();
    // //     const page3 = await browser.newPage();
    // //     await page2.goto('https://google.com');
    // //     await page3.goto('https://github.com');
    // //     console.log('Created 2 extra pages from browser');
    // //     console.log('Context is isolated environment:');
    // //     const contextPage = await context.newPage();
    // //     await contextPage.goto('https://playwright.dev');
    // //     console.log('This page has separate cookies/storage');
    // //     await page2.close();
    // //     await page3.close();
    // //     await contextPage.close();
    // //     await page.pause();
    // // });
});