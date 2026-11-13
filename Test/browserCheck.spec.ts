import { test, expect } from '@playwright/test';

test('Check Chromium browser launch', async ({ page }) => {

    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle(/Google/);

});