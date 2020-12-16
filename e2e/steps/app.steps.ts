import { SearchFormPo } from '../page-objects/search-form.po';
import { SearchResultsPo } from '../page-objects/search-results.po';
import { Given, When, Then, setDefaultTimeout } from 'cucumber';
import { browser } from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const results = new SearchResultsPo();
chai.use(chaiAsPromised);
setDefaultTimeout(60 * 1000);

const searchFormPO = new SearchFormPo();

let currentName: string;
let currentSearchType: string;

Given('I navigate to {string}', async (host) => {
    await browser.get('http://' + host + ':4200/');
});

When('I search a {string} for {string}s name', async (searchType, name) => {
    await searchFormPO.selectSearchType(searchType);
    await searchFormPO.input.sendKeys(name);
    await searchFormPO.searchBtn.click();
    currentName = name;
    currentSearchType = searchType;
});

Then('I see that the {string} is {string}', async (detail, expectedValue) => {
    let detailProperty: string;
    switch (detail.toUpperCase().trim()) {
        case 'GENDER': detailProperty = 'gender'; break;
        case 'BIRTH YEAR': detailProperty = 'birthYear'; break;
        case 'EYE COLOR': detailProperty = 'eyeColor'; break;
        case 'SKIN COLOR': detailProperty = 'skinColor'; break;
        case 'POPULATION': detailProperty = 'population'; break;
        case 'CLIMATE': detailProperty = 'climate'; break;
        case 'GRAVITY': detailProperty = 'gravity'; break;
    }
    switch (currentSearchType) {
        case 'person':
            await chai.expect(results.getCharacterByName(currentName)[detailProperty].getText()).to.eventually.equal(expectedValue);
            break;
        case 'planet':
            await chai.expect(results.getPlanetByName(currentName)[detailProperty].getText()).to.eventually.equal(expectedValue);
            break;
    }
});

Then('I see multiple Star Wars {string} partially matching the name:', async (searchType, dataTable) => {
    const expectedNames = dataTable.raw().map(columnArray => columnArray[0]);
    switch (searchType.toUpperCase().trim()) {
        case 'CHARACTERS':
            await chai.expect(results.getCharacterNames()).to.eventually.have.same.members(expectedNames);
            break;
        case 'PLANETS':
            await chai.expect(results.getPlanetNames()).to.eventually.have.same.members(expectedNames);
            break;
    }
});

Then('The message {string} is shown', async (expectedMessageText) => {
    await chai.expect(results.notFoundMessage()).to.eventually.equal(expectedMessageText);
});
