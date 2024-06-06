Feature: User Authentication

Background:
Given User navigates to the application
And User clicks on login link

Scenario: User should be able to login
When User enter username
When User enter password
And User clicks on login button
Then Verify user is logged in