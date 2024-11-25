Feature: e2e e-commerce validation

Scenario: e-commerce product delivery
Given I am on e-commerce page
When I login to the application using
|username|password|
|rahulshettyacademy|learning|
And I add items to the cart and checked out
And validate total price limit
Then select country submit and verify thank you.

Scenario Outline: e-commerce product delivery for multiple credentials
Given I am on e-commerce page
When I login to the application using "<username>" and "<password>"
And I add items to the cart and checked out
And validate total price limit
Then select country submit and verify thank you.
Examples:
    | username | password |
    | rahulshettyacademy  | learning  |