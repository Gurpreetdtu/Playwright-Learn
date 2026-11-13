
import { Page } from '@playwright/test';

export class RegisterPage {

    constructor(private page: Page) {}

    // Locators
    firstname = this.page.locator('#input-firstname');
    lastname = this.page.locator('#input-lastname');
    email = this.page.locator('#input-email');
    password = this.page.locator('#input-password');

    btnContinue = this.page.getByRole('button', { name: 'Continue' });

    // Methods
   async open() {
    await this.page.goto('/index.php?route=account/register');
}

async enterFirstName(name: string) {
    await this.firstname.fill(name);
}

async enterLastName(name: string) {
    await this.lastname.fill(name);
}

async enterEmail(email: string) {
    await this.email.fill(email);
}

async enterPassword(password: string) {
    await this.password.fill(password);
}

}
