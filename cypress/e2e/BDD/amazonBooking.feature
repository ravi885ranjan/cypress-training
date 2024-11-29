Feature: Item search, sorting and filtering on home page without login

  Background: navigating to amazon home page
    Given user opens amazon home page

  Scenario: to validate sorting of result by price
    When user enters "toys" in search criteria and hit apply
    Then search result for "toys" should appear
    When user selects sort by price
    Then the user should see products with prices in ascending order

  Scenario: to proceed to checkout should lead to signup without login
    When user enters "pencil" in search criteria and hit apply
    Then search result for "pencil" should appear
    When user selects sort by price
    * adds an item to the cart
    * user clicks on go to cart
    Then user should see an item in the cart
    When user clicks on proceed to checkout
    Then signup page should appear