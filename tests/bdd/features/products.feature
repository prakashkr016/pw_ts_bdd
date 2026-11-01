@products
Feature: Products
    As a shopper
    I want to browse, search and review products
    So that I can find what I want to buy

    Background:
        Given the user is on the home page

    # TC8
    @smoke
    Scenario: View all products and a product's details
        When the user clicks on "Products"
        Then the user should see "ALL PRODUCTS"
        And the products list should be visible
        When the user views the first product
        Then the product details should show name, category, price, availability, condition and brand

    # TC9
    @smoke
    Scenario: Search for a product
        When the user clicks on "Products"
        And the user searches for "Jeans"
        Then the user should see "SEARCHED PRODUCTS"
        And every product shown should contain "Jeans" in its name

    # TC18
    Scenario: View products by category
        Then the category sidebar should be visible
        When the user selects category "Women" and sub-category "Dress"
        Then the user should see "WOMEN - DRESS PRODUCTS"
        When the user selects category "Men" and sub-category "Tshirts"
        Then the user should see "MEN - TSHIRTS PRODUCTS"

    # TC19
    Scenario: View products by brand
        When the user clicks on "Products"
        Then the brands sidebar should be visible
        When the user selects brand "Polo"
        Then the user should see "BRAND - POLO PRODUCTS"
        And the products list should be visible
        When the user selects brand "H&M"
        Then the user should see "BRAND - H&M PRODUCTS"
        And the products list should be visible

    # TC21
    Scenario: Add a review on a product
        When the user clicks on "Products"
        And the user views the first product
        Then the user should see "Write Your Review"
        When the user submits a review with name "pw_test_prakash", email "prakashsingh01081994@gmail.com" and review "Good quality, fits well"
        Then the user should see "Thank you for your review."