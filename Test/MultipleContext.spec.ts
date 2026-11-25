
import { test, expect } from '@playwright/test';

test('Login and Register using separate contexts', async ({ browser }) => {

    // Create two independent browser contexts
    const loginContext = await browser.newContext();
    const registerContext = await browser.newContext();

    // Create one page in each context
    const loginPage = await loginContext.newPage();
    const registerPage = await registerContext.newPage();

    // Open both pages simultaneously
    await Promise.all([
        loginPage.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login'),
        registerPage.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    ]);

    // Validate both pages
    await expect(loginPage.locator('#input-email')).toBeVisible();

    await expect(registerPage.locator('#input-firstname')).toBeVisible();

    // Close contexts
    await loginContext.close();
    await registerContext.close();
});
