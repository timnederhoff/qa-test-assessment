Feature: Additional Flows

  Additional requirements are derived from the additional flows mentioned in the README.md. Except the partial search
  flow, that requirement is covered by the planet and character search.

  Background:
    Given I navigate to "localhost"

  Scenario Outline: Previous results disappear when getting no results after searching with a cleared form
    When I search a "person" for "<name>"s name
    And I see the details of "<name>" in the results
    When I search a "person" for ""s name
    Then no results are shown
    Examples:
      | name           |
      | Luke Skywalker |

  Scenario Outline: Activating a search by using an enter keypress
    When I type "<name>" for a "person" in the search field
    And I press enter to activate my search
    Then I see the details of "<name>" in the results
    Examples:
    | name           |
    | Luke Skywalker |

  Scenario Outline: Previous results disappear when getting empty results after switching the search type
    When I search a "person" for "<name>"s name
    And I see the details of "<name>" in the results
    When I search a "planet" for "nonexistingplanet"s name
    Then The message "Not found." is shown
    Examples:
    | name           |
    | Luke Skywalker |
