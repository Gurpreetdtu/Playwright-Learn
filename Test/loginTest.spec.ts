import { expect, test } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';

test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('gurpreet@askfjaskfjasfj', 'sashjsahd');

    await expect(page.locator('.alert-danger')).toBeVisible();
});
