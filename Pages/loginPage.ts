
import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    // Locators
    private email = this.page.locator('#input-email');
    private password = this.page.locator('#input-password');
    private buttonLogin = this.page.getByRole('button', { name: 'Login' });

    // Open login page
    async open() {
        await this.page.goto('/index.php?route=account/login');
    }

    // Enter email
    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    // Enter password
    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    // Click login
    async clickLogin() {
        await this.buttonLogin.click();
    }

    // Complete login
    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}
