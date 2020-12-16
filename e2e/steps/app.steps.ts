import { SearchResultsPo } from '../page-objects/search-results.po';

const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
const results = new SearchResultsPo();
chai.use(require('chai-as-promised'));
setDefaultTimeout(60 * 1000);

const searchFormPO = require('../page-objects/search-form.po');

let currentName: string;

Given('I navigate to {string}', async (host) => {
    await browser.get('http://' + host + ':4200/');
    await browser.sleep(2000);
});

When('I search for {string}s name', async (name) => {
    await searchFormPO.input.sendKeys(name);
    await searchFormPO.searchBtn.click();
    currentName = name;
    await browser.sleep(2000);
});

Then('I see Lukes details', async () => {
    await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText'))
        .to.eventually.contain('Skywalker');
});

Then('I see that the {string} is {string}', async (detail, expectedValue) => {
    let detailProperty: string;
    switch (detail.toUpperCase().trim()) {
        case 'GENDER': detailProperty = 'gender'; break;
        case 'BIRTH YEAR': detailProperty = 'birthYear'; break;
        case 'EYE COLOR': detailProperty = 'eyeColor'; break;
        case 'SKIN COLOR': detailProperty = 'skinColor'; break;
    }
    await chai.expect(results.getCharacterByName(currentName)[detailProperty].getText()).to.eventually.equal(expectedValue);
});

Then('I see multiple Star Wars characters partially matching the name:', async (dataTable) => {
    const expectedNames = dataTable.raw().map(columnArray => columnArray[0]);
    await chai.expect(results.getNames()).to.eventually.have.same.members(expectedNames);
});
