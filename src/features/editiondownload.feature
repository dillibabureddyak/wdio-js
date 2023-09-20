Feature: Download the Newspaper edition

    Scenario: Verify the Newspaper edition is downloadable
        Given I launch the app
        When I tap see more for recent issues in newspaper tab
        And I tap to download June 27 edition in archive tab
        And I logged in on paywall carousel
        Then I wait for edition to complete download