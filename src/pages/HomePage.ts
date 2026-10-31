import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loggedInAs: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loggedInAs = page.getByText('Logged in as');
    }

    async goto() {
        await this.page.goto('https://www.automationexercise.com/');
    }
}