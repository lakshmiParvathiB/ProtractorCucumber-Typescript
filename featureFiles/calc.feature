Feature: test the Calc angular webpage
@calCTest
  Scenario: test the add functionality
    Given :i am on Calc page
    When :when i enter number "3" and number "5"
    Then :the result shold be "8"

@calCTest
  Scenario: test the add functionality
    Given :i am on "Calc" page
    When :when i enter number "6" and number "3"
    Then :the result shold be "9"
@angularpageTest
  Scenario: test the angular web page search box functionality
    Given :i am on "angularwebpage1" page
    When :when i click on angular.io link
    Then :enter the text "hello" in search feild

    