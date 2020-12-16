const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));
setDefaultTimeout(60 * 1000);

const searchFormPO = require('../page-objects/search-form.po');

Given('I navigate to {string}', async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
});

When('I search for {string}s name', async () => {
    await searchFormPO.input.sendKeys('Luke Skywalker');
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

Then('I see Lukes details', async () => {
    await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText'))
        .to.eventually.contain('Skywalker');
});
