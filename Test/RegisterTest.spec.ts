import { test } from '@playwright/test';
import { RegisterPage } from '../Pages/RegisterPage';

test('Sign up on the Register page', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    await registerPage.open();

    await registerPage.enterFirstName('Gurpreet');
    await registerPage.enterLastName('Singh');
    await registerPage.enterEmail('gurpreet123@gmail.com');
    await registerPage.enterPassword('Gurpreet@123');

    await page.waitForTimeout(3000);

});