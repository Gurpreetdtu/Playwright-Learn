
import { Page } from '@playwright/test';

export class RegisterPage {

    constructor(private page: Page) {}

    // Locators
    private firstName = this.page.locator('#input-firstname');
    private lastName = this.page.locator('#input-lastname');
    private email = this.page.locator('#input-email');
    private password = this.page.locator('#input-password');
    private privacyPolicy = this.page.locator('input[name="agree"]');
    private continueButton = this.page.getByRole('button', { name: 'Continue' });

    // Open register page
    async open() {
        await this.page.goto('/index.php?route=account/register');
    }

    async enterFirstName(name: string) {
        await this.firstName.fill(name);
    }

    async enterLastName(name: string) {
        await this.lastName.fill(name);
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async acceptPrivacyPolicy() {
        await this.privacyPolicy.check();
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async register(firstName: string, lastName: string,
                   email: string, password: string) {

        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.acceptPrivacyPolicy();
        await this.clickContinue();
    }
}
