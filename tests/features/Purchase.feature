Feature: Purchase
    Scenario: Navigating Website
        Given I am on Swag Labs homepage
        When I log in
        Then I add stuff to cart
        Given I am going to cart
        When I remove T-Shirt
        Then I check out
        Given I put my personal information
        When I finished shopping
        Then I check out