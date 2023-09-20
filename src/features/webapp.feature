Feature: News app video player and premier league table verifications

    Scenario: Verify the video player controls are working as expected
        Given I was on daily mail video page
        When I click play to play the video
        And I click pause to pause  the video
        And I click forward to forward the video
        And I click backward to backward the video
        And I click mute to mute the video
        And I click umute to umute the video
        And I see next video plays when current video finish