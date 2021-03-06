Feature: Search for a Star Wars character

    Background:
        Given I navigate to "localhost"

    Scenario Outline: By full name
        When I search a "person" for "<name>"s name
        Then I see that the "gender" is "<gender>"
        And I see that the "birth year" is "<birth_year>"
        And I see that the "eye color" is "<eye_color>"
        And I see that the "skin color" is "<skin_color>"
        Examples:
            | name           | gender | birth_year | eye_color | skin_color |
            | Luke Skywalker | male   | 19BBY      | blue      | fair       |
            | Leia Organa    | female | 19BBY      | brown     | light      |

    Scenario: By partial name (multiple results)
        When I search a "person" for "Skywalker"s name
        Then I see multiple Star Wars "characters" partially matching the name:
            | Luke Skywalker   |
            | Anakin Skywalker |
            | Shmi Skywalker   |

    Scenario: With non existing name
        When I search a "person" for "nonexisting"s name
        Then The message "Not found." is shown
