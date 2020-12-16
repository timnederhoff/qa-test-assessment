import {element, $, $$, ElementFinder, by} from 'protractor';

class Character {
    constructor(private card: ElementFinder) {}

    gender: ElementFinder = this.card.$('.e2e-gender');
    birthYear: ElementFinder = this.card.$('.e2e-birth_year');
    eyeColor: ElementFinder = this.card.$('.e2e-eye_color');
    skinColor: ElementFinder = this.card.$('.e2e-skin_color');

}

class Planet {
    constructor(private card: ElementFinder) {}

    population = this.card.$('.e2e-population');
    climate = this.card.$('.e2e-climate');
    gravity = this.card.$('.e2e-gravity');
}

export class SearchResultsPo {
    getResultCount = () => $$('.e2e-character').count();
    notFoundMessage = () => $('.e2e-not-found-message').getText();

    // I know xpath is not generally preferred because of performance reasons, but in this case the most effective method
    getCharacterByName = name => new Character(element(by.xpath(`//div[contains(@class, "e2e-character")][.//h6[text()="${name}"]]`)));
    getPlanetByName = name => new Planet(element(by.xpath(`//div[contains(@class, "e2e-planet")][.//h6[text()="${name}"]]`)));

    getCharacterNames = () => $$('.card-subtitle').getText();
    getPlanetNames = () => $$('.card-subtitle').getText();
}
