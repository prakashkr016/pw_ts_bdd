import { expect } from '@playwright/test';
import { Given, When, Then } from '../../../src/fixtures/fixtures';

Given('the user is on the home page', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.page).toHaveTitle('Automation Exercise');
});

When('the user clicks on {string}', async ({ homePage }, text: string) => {
    const link = homePage.page.getByRole('link', { name: text });
    const button = homePage.page.getByRole('button', { name: text, exact: true });
    await link.or(button).first().click();
});

Then('the user should see {string}', async ({ homePage }, text: string) => {
    await expect(homePage.page.getByText(text).first()).toBeVisible();
});