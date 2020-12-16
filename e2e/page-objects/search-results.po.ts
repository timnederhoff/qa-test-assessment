import {element, $$, ElementFinder, by} from 'protractor';

class Character {
    constructor(private card: ElementFinder) {}

    gender: ElementFinder = this.card.$('.e2e-gender');
    birthYear: ElementFinder = this.card.$('.e2e-birth_year');
    eyeColor: ElementFinder = this.card.$('.e2e-eye_color');
    skinColor: ElementFinder = this.card.$('.e2e-skin_color');

}

export class SearchResultsPo {
    getResultCount = () => $$('.e2e-character').count();

    // I know xpath is not generally preferred because of performance reasons, but in this case the most effective method
    getCharacterByName = name => new Character(element(by.xpath(`//div[contains(@class, "e2e-character")][.//h6[text()="${name}"]]`)));

    getNames = () => $$('.card-subtitle').getText();
}
