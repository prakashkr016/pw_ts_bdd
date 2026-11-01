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
    readonly userName: Locator;
    readonly email: Locator;
    readonly reviewText: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.info = page.locator('.product-information');
        this.name = this.info.locator('h2');
        this.category = this.info.getByText('Category:')
        this.price = this.info.getByText('Rs.')
        this.availability = this.info.getByText('Availability:')
        this.condition = this.info.getByText('Condition:')
        this.brand = this.info.getByText('Brand:')
        this.userName = page.locator('#name')
        this.email = page.locator('#email')
        this.reviewText = page.locator('#review')
        this.submitButton = page.locator('#button-review')
    }

    async submitReview(name: string, email: string, review: string) {
        await this.userName.fill(name);
        await this.email.fill(email);
        await this.reviewText.fill(review);
        await this.submitButton.click();
    }
}