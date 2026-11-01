import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {
    readonly page: Page;
    readonly info: Locator;
    readonly name: Locator;
    readonly category: Locator;
    readonly price: Locator;
    readonly availability: Locator;
    readonly condition: Locator;
    readonly brand: Locator;

    constructor(page: Page) {
        this.page = page;
        this.info = page.locator('.product-information');
        this.name = this.info.locator('h2');
        this.category = this.info.getByText('Category:')
        this.price = this.info.getByText('Rs.')
        this.availability = this.info.getByText('Availability:')
        this.condition = this.info.getByText('Condition:')
        this.brand = this.info.getByText('Brand:')
    }


}