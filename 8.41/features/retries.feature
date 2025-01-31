Feature: Cucumber retries

  Scenario Outline: This gets timeout error with retry

    Given I am on the internet page
    Then I assert element with retry

  Scenario Outline: This gets proper error without retry

    Given I am on the internet page
    Then I assert element without retry
