import { element, by } from 'protractor';

module.exports = {
    get input() {
        return element(by.id('query'));
    },
    get searchBtn() {
        return element(by.css('button'));
    },
    get firstCharacterName() {
        return element(by.css('app-character h6'));
    }
};
