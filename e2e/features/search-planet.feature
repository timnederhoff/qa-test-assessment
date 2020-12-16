Feature: Search for a Star Wars planet

    Background:
        Given I navigate to "localhost"

    Scenario Outline: By full name
        When I search a "planet" for "<name>"s name
        Then I see that the "population" is "<population>"
        And I see that the "climate" is "<climate>"
        And I see that the "gravity" is "<gravity>"
        Examples:
            | name     | population | climate  | gravity    |
            | Dagobah  | unknown    | murky    | N/A        |
            | Kashyyyk | 45000000   | tropical | 1 standard |

    Scenario: By partial name (multiple results)
        When I search a "planet" for "ho"s name
        Then I see multiple Star Wars "planets" partially matching the name:
            | Hoth     |
            | Dathomir |
            | Tholoth  |

    Scenario: With non existing name
        When I search a "planet" for "nonexisting"s name
        Then The message "Not found." is shown
