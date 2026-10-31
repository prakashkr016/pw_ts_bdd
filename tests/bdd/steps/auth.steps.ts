import { expect } from '@playwright/test';
import { Given, When, Then } from '../../../src/fixtures/fixtures';

When('the user signs up with a new name and a unique email', async ({ loginPage }) => {
    const uniqueEmail = `testuser.${Date.now()}@example.com`;
    await loginPage.signup('Test User', uniqueEmail);
});

When('the user fills the account information with valid details', async ({ page }) => {
    await page.locator('#id_gender1').check();
    await page.getByTestId('password').fill('Test@1234');
    await page.getByTestId('days').selectOption('10');
    await page.getByTestId('months').selectOption('May');
    await page.getByTestId('years').selectOption('1995');
    await page.locator('#newsletter').check();
    await page.locator('#optin').check();
    await page.getByTestId('first_name').fill('Test');
    await page.getByTestId('last_name').fill('User');
    await page.getByTestId('company').fill('Test Company');
    await page.getByTestId('address').fill('12 Main Road');
    await page.getByTestId('address2').fill('Near City Centre');
    await page.getByTestId('country').selectOption('India');
    await page.getByTestId('state').fill('Karnataka');
    await page.getByTestId('city').fill('Bengaluru');
    await page.getByTestId('zipcode').fill('560001');
    await page.getByTestId('mobile_number').fill('9876543210');
});

Then('the user should be logged in', async ({ homePage }) => {
    await expect(homePage.loggedInAs).toBeVisible();
});

When('the user logs in with valid credentials', async ({ loginPage }) => {
    await loginPage.login('prakashsingh01081994@gmail.com', 'pw_test_prakash');
});

When('the user logs in with email {string} and password {string}', async ({ loginPage }, email: string, password: string) => {
    await loginPage.login(email, password);
});

Then('the user should be on the login page', async ({ page }) => {
    await expect(page).toHaveURL(/login/)
});

When('the user signs up with name {string} and email {string}', async ({ loginPage }, name: string, email: string) => {
    await loginPage.signup(name, email);
});
