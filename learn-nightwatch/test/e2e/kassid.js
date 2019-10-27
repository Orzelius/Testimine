var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
    '@tags': ['kassid'],
    'kassid test': function (browser) {
        browser
            .maximizeWindow()
            .url('https://www.google.com/')
            .waitForElementVisible('body')
            .useXpath()
            .pause(1000)
            .click('body')
            // .waitForElementVisible('body')
            // // .select('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
            // // .clearValue('##tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
            // .setValue('input[type=text]', ['Cat', browser.Keys.ENTER])
            // .waitForElementVisible('body')
            // .saveScreenshot(config.imgpath(browser) + 'a-screenshot-description.png')
            // .pause(1000)
            // .assert.containsText('.kp-hc > div', 'Kass')
            // .click('#hdtb-msb-vis > div:nth-child(2) > a')
            // // .clearValue('#i_am_a_textbox')
            // // .setValue('#i_am_a_textbox', 'albert')
            // // .click('checked_checkbox')
            // // .click('unchecked_checkbox')
            // .saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz.png')
            // .end();
    }
};