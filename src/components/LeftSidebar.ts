import { Page, Locator } from '@playwright/test';

export class LeftSidebar {
    readonly page: Page;
    // Fixed locators: always the same, so readonly properties
    readonly categoryPanel: Locator;
    readonly brandsPanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.categoryPanel = page.locator('#accordian');
        this.brandsPanel = page.locator('.brands_products');
    }

    // Dynamic locators: depend on input, so methods that RETURN a Locator
    categoryLink(category: string): Locator {
        return this.categoryPanel.locator(`a[href="#${category}"]`);
    }

    subCategoryLink(category: string, subCategory: string): Locator {
        return this.page.locator(`#${category}`).getByRole('link', { name: subCategory });
    }

    brandLink(brand: string): Locator {
        return this.brandsPanel.getByRole('link', { name: brand });
    }

    // Actions: business methods that use the locators above
    async selectCategory(category: string, subCategory: string) {
        await this.categoryLink(category).click();
        await this.subCategoryLink(category, subCategory).click();
    }

    async selectBrand(brand: string) {
        await this.brandLink(brand).click();
    }
}