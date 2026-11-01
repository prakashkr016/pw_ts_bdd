import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly productNames: Locator;
    readonly firstViewProductLink: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productNames = page.locator('.features_items .productinfo p')
        this.firstViewProductLink = page.getByRole('link', { name: 'View Product' }).first()
        this.searchInput = page.locator('#search_product')
        this.searchButton = page.locator('#submit_search')
    }

    async viewFirstProduct() {
        await this.firstViewProductLink.click();
    }

    async searchFor(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

}