Feature: Search for the web
 As a human
 I want to search the web
 So I can find info

@phone
 Scenario: Search for twitter
   Given I have visited Google
   When I search for "twitter"
   And I see "twitter"
   Then I click the site name
