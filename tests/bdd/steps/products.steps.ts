import { expect } from '@playwright/test';
import { Given, When, Then } from '../../../src/fixtures/fixtures';

Then('the products list should be visible', async ({ productsPage }) => {
    await expect(productsPage.productNames.first()).toBeVisible();
});

When('the user views the first product', async ({ productsPage }) => {
    await productsPage.viewFirstProduct();
});

Then('the product details should show name, category, price, availability, condition and brand', async ({ productDetailsPage }) => {
    await expect(productDetailsPage.name).toBeVisible();
    await expect(productDetailsPage.category).toBeVisible();
    await expect(productDetailsPage.price).toBeVisible();
    await expect(productDetailsPage.availability).toBeVisible();
    await expect(productDetailsPage.condition).toBeVisible();
    await expect(productDetailsPage.brand).toBeVisible();
});

When('the user searches for {string}', async ({ productsPage }, productName: string) => {
    await productsPage.searchFor(productName);
});

Then('every product shown should contain {string} in its name', async ({ productsPage }, text: string) => {
    await expect(productsPage.productNames.first()).toBeVisible();
    const names = await productsPage.productNames.allTextContents();
    expect(names.length).toBeGreaterThan(0);
    for (const name of names) {
        expect(name.toLowerCase()).toContain(text.toLowerCase());
    }
});

Then('the category sidebar should be visible', async ({ leftSidebar }) => {
    await expect(leftSidebar.categoryPanel).toBeVisible();
});

When('the user selects category {string} and sub-category {string}', async ({ leftSidebar }, category: string, subCategory: string) => {
    await leftSidebar.selectCategory(category, subCategory);
});

Then('the brands sidebar should be visible', async ({ leftSidebar }) => {
    await expect(leftSidebar.brandsPanel).toBeVisible();
});

When('the user selects brand {string}', async ({ leftSidebar }, brand: string) => {
    await leftSidebar.selectBrand(brand);
});
