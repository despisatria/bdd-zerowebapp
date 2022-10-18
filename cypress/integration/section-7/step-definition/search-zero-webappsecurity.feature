Feature: Search feature in Zero Webappsecurity website

    As a user (valid or guest)
    I want to search the word "Online Banking" on the search feature

    Scenario: Searchbar usage
        Given I open the Zero Webappsecurity website
        When I typed the word "Online Banking" on the searchbar and pressed Enter Key
        Then I should get the search result about "Online Banking" in the Zeroappsecurity