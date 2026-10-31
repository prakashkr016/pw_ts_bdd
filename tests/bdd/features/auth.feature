@auth
Feature: User authentication
    As a shopper
    I want to register, log in and log out
    So that I can manage my account and orders

    Background:
        Given the user is on the home page

    # TC1 - registration is the thing under test, so every step is spelled out
    @smoke
    Scenario: Register a new user and delete the account
        When the user clicks on "Signup / Login"
        Then the user should see "New User Signup!"
        When the user signs up with a new name and a unique email
        Then the user should see "ENTER ACCOUNT INFORMATION"
        When the user fills the account information with valid details
        And the user clicks on "Create Account"
        Then the user should see "ACCOUNT CREATED!"
        When the user clicks on "Continue"
        Then the user should be logged in
        When the user clicks on "Delete Account"
        Then the user should see "ACCOUNT DELETED!"

    # TC2 - account is NOT deleted here, because we reuse one fixed test account
    @smoke
    Scenario: Login with correct email and password
        When the user clicks on "Signup / Login"
        Then the user should see "Login to your account"
        When the user logs in with valid credentials
        Then the user should be logged in

    # TC3 - one scenario, run once per row of the Examples table
    Scenario Outline: Login fails with incorrect credentials
        When the user clicks on "Signup / Login"
        And the user logs in with email "<email>" and password "<password>"
        Then the user should see "Your email or password is incorrect!"

        Examples:
            | email                  | password      |
            | wrong.user@example.com | Wrong@123     |
            | your-email@example.com | WrongPass@999 |

    # TC4
    Scenario: Logout user
        When the user clicks on "Signup / Login"
        And the user logs in with valid credentials
        Then the user should be logged in
        When the user clicks on "Logout"
        Then the user should be on the login page

    # TC5
    Scenario: Register with an already registered email
        When the user clicks on "Signup / Login"
        Then the user should see "New User Signup!"
        When the user signs up with name "pw_test_prakash" and email "prakashsingh01081994@gmail.com"
        Then the user should see "Email Address already exist!"