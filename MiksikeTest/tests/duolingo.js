const boxen = require('boxen');

let handle;
let duolingoStr;
let translateOption = "german";
let currentTranslateOption = "german";

module.exports = { // addapted from: https://git.io/vodU0
    '@tags': ['duolingo'],
    'duolingo test': function (browser) {
        browser
            .maximizeWindow()
            .url('https://www.duolingo.com/')
            .pause(500)
            .useXpath()
            .pause(200)
            .waitForElementVisible('/html/body/div[1]/div/div/span[1]/div/div[1]/div[2]/div/div[1]')
            .click('/html/body/div[1]/div/div/span[1]/div/div[1]/div[2]/div/div[1]')
            .pause(200)
            .waitForElementVisible('/html/body/div[1]/div/div/span/div/div/div/div/ul/a[3]/div/div[2]/div')
            .click('/html/body/div[1]/div/div/span/div/div/div/div/ul/a[3]/div/div[2]/div')
            .pause(6000)
            .waitForElementVisible('/html/body/div[1]/div/div/div/div[2]/div/div/ul/li[1]/label/span')
            .click('/html/body/div[1]/div/div/div/div[2]/div/div/ul/li[1]/label/span')
            .pause(300)
            .click('/html/body/div[1]/div/div/div/div[2]/div/div/button')
            .pause(200)
            .waitForElementVisible('/html/body/div[1]/div/div/div/div[2]/div/div/button')
            .click('/html/body/div[1]/div/div/div/div[2]/div/div/button')
            .pause(200)
            .waitForElementVisible('/html/body/div[1]/div/div/div/div[2]/div/div/ul/li[3]/button')
            .click('/html/body/div[1]/div/div/div/div[2]/div/div/ul/li[3]/button')
            .pause(200)
            .waitForElementVisible('/html/body/div[1]/div/div/div/div[2]/div/div/div/button[2]')
            .click('/html/body/div[1]/div/div/div/div[2]/div/div/div/button[2]')
            .pause(200)
            .waitForElementVisible('/html/body/div[1]/div/div/div/div/div[3]/div/div/div/button')
            .click('/html/body/div[1]/div/div/div/div/div[3]/div/div/div/button')
            //At this point it has navigated to the language test
            .getText('/html/body/div[1]/div/div/div/div/div[2]/div/div/div/div/div/div[1]/span/span', function (result) {
                duolingoStr = result.value;
                browser
                    .getText('/html/body/div[1]/div/div/div/div/div[2]/div/div/div/div/h1/span', function (result2) {
                        if (result2.value == 'Write this in German') {
                            translateOption = "german";
                        } else if (result2.value == 'Write this in English') {
                            translateOption = "english";
                        }
                    })
            })
            .openNewWindow()
            .windowHandles(function (handles) {
                // An array of window handles.
                handle = handles;
                // console.log(handle.value);
                browser
                    .switchWindow(handle.value[1])
                    .url('https://translate.google.com/#view=home&op=translate&sl=en&tl=de')
                    .pause(2000);
            })
            .waitForElementVisible('//*[@id="source"]', function () {
                for (let x = 0; x < 10; x++) {
                    browser
                        .pause(2000, function () {
                            if (translateOption !== currentTranslateOption) {
                                browser.click('/html/body/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div/div').pause(1000);
                                currentTranslateOption = translateOption;
                            }
                        })
                        .clearValue('//*[@id="source"]')
                        .setValue('//*[@id="source"]', duolingoStr)
                        .keys(browser.Keys.ENTER)
                        .waitForElementVisible('/html/body/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div/span[1]/span')
                        .pause(100)
                        .getText('/html/body/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div/span[1]/span', function (transaltion) {
                            browser
                            .switchWindow(handle.value[0])
                            .getText('/html/body/div[1]/div/div/div/div/div[2]/div/div/div/div/h1/span', function (result2) {
                                let isTranslateble = false;
                                while (!isTranslateble) {
                                        if (result2.value == 'Write this in German') {
                                            translateOption = "german";
                                            isTranslateble = true;
                                        } else if (result2.value == 'Write this in English') {
                                            translateOption = "english";
                                            isTranslateble = true;
                                        } else {
                                            isTranslateble = false;
                                            browser
                                            .click('/html/body/div[1]/div/div/div/div/div[3]/div/div/div[1]/button')
                                                .pause(1000)
                                                .waitForElementVisible('/html/body/div[1]/div/div/div/div/div[3]/div/div/div[2]/button')
                                                .click('/html/body/div[1]/div/div/div/div/div[3]/div/div/div[2]/button');
                                        }
                                    }

                                    let wordlist = false;
                                    
                                    browser.element('xpath', '/html/body/div[1]/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div/div/div[2]/div', function (result) {
                                        if (result.status != -1) {
                                            //Element exists, do something
                                            wordlist = true;
                                        }
                                    })

                                    if (wordlist) {
                                        //If a wordlist appears
                                        console.log("Wordlist appears");
                                    }
                                    if (!wordlist) {
                                        //If a text field appears
                                        browser
                                        //Set translated text
                                        .setValue('/html/body/div[1]/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div/textarea', transaltion.value)
                                        .click('/html/body/div[1]/div/div/div/div/div[3]/div/div/div[2]/button')
                                        .pause(3000)
                                        .click('/html/body/div[1]/div/div/div/div/div[3]/div/div/div[2]/button')
                                        .pause(3000)
                                        //Get new text
                                        .waitForElementVisible('/html/body/div[1]/div/div/div/div/div[2]/div/div/div/div/div/div[1]/span/span')
                                            .getText('/html/body/div[1]/div/div/div/div/div[2]/div/div/div/div/div/div[1]/span/span', function (result) {
                                                duolingoStr = result.value;
                                            })
                                    }
                                })
                                .switchWindow(handle.value[1]);
                            })
                        }
                    })
            .pause(1000000000000);
            //   .end();
        }
};