import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '@pages/HomePage';
import { ProductsPage } from '@pages/ProductsPage';
import { ProductDetailsPage } from '@pages/ProductDetailsPage';


type MyFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    productsPage: ProductsPage;
    productDetailsPage: ProductDetailsPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    },
    productDetailsPage: async ({ page }, use) => {
        await use(new ProductDetailsPage(page));
    }
});

export const { Given, When, Then } = createBdd(test);