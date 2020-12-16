import {element, $, $$, ElementFinder, by} from 'protractor';

class Character {
    constructor(private card: ElementFinder) {}

    gender = this.card.$('.e2e-gender');
    birthYear = this.card.$('.e2e-birth_year');
    eyeColor = this.card.$('.e2e-eye_color');
    skinColor = this.card.$('.e2e-skin_color');
    isPresent = () => this.card.isPresent();
}

class Planet {
    constructor(private card: ElementFinder) {}

    population = this.card.$('.e2e-population');
    climate = this.card.$('.e2e-climate');
    gravity = this.card.$('.e2e-gravity');
    isPresent = this.card.isPresent();
}

export class SearchResultsPo {
    notFoundMessage = () => $('.e2e-not-found-message').getText();

    // I know xpath is not generally preferred because of performance reasons, but in this case the most effective method
    getCharacterByName = name => new Character(element(by.xpath(`//div[contains(@class, "e2e-character")][.//h6[text()="${name}"]]`)));
    getPlanetByName = name => new Planet(element(by.xpath(`//div[contains(@class, "e2e-planet")][.//h6[text()="${name}"]]`)));

    getCharacterNames = () => $$('.card-subtitle').getText();
    getPlanetNames = () => $$('.card-subtitle').getText();
}
