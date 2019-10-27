var config = require('../../nightwatch.conf.js');
var link;

module.exports = { // addapted from: https://git.io/vodU0
    '@tags': ['miksike'],
    'miksike test': function (browser) {
        browser
            .maximizeWindow()
            .url('https://miksike.ee/')
            .waitForElementVisible('body')
            .useXpath()
            .pause(1000)
            .click('/html/body/div[1]/form[2]/table/tbody/tr/td[4]/a')
            .pause(300)
            .click('/html/body/div[2]/div[1]/table/tbody/tr[2]/td[2]/table/tbody/tr/td/table/tbody/tr/td[4]/a')
            .pause(300)
            .getValue('/html/body/div[2]/div[2]/div/table/tbody/tr[2]/td[1]/table/tbody/tr[8]/td[3]/a', 
                function(result){
                    link = result.value;
                })
            .pause(300)
            .openNewWindow('tab', function(result) {
                console.log(result.value);
              })
            .pause(10000)
            .end();
        }
    };
            
            
            
            // .click('/html/body/div[1]/div/div/span[1]/div/div[1]/div[2]/div/div[1]/a')
            // .waitForElementVisible('/html/body/div[1]/div/div/span/div/div/div/div/ul/a[3]')
            // .pause(400)
            // .click('/html/body/div[1]/div/div/span/div/div/div/div/ul/a[3]/div/div[2]/div')
            // .waitForElementVisible('/html/body/div[1]/div/div/span/div/div/div/div/ul/a[3]/div/div[2]/div')
            // .click('//*[@id="root"]/div/div/div/div[2]/div/div/ul/li[5]/label/div')
            // .pause(300)
            // .click('//*[@id="root"]/div/div/div/div[2]/div/div/button')
            // .pause(200)
            // .click('//*[@id="root"]/div/div/div/div[2]/div/div/button')
            // .pause(200)
            // .click('//*[@id="root"]/div/div/div/div[2]/div/div/ul/li[3]/button')
            // .pause(200)
            // .click('//*[@id="root"]/div/div/div/div[2]/div/div/div/button[2]')
            // .pause(200)
            // .click('//*[@id="root"]/div/div/div/div/div[3]/div/div/div/button')
            // .click('/html/body/div[2]/div/div/form/div[1]/button')

        // .waitForElementVisible('/html/body/div[2]/div/div/form/div[1]/div/label[1]/div/input')
        // .setValue('/html/body/div[2]/div/div/form/div[1]/div/label[1]/div/input', 'albertkostusev2@gmail.com')
        // .pause(10)
        // .setValue('/html/body/div[2]/div/div/form/div[1]/div/label[2]/div/input', 'Passw0rs')
        // .clearValue('/html/body/div[2]/div/div/form/div[1]/div/label[2]/div/input')
        // .setValue('/html/body/div[2]/div/div/form/div[1]/div/label[2]/div/input', 'Passw0rd')
        // .pause(300)
        // .select('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
        // .clearValue('##tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
        // .setValue('input[type=text]', ['Cat', browser.Keys.ENTER])
        // .waitForElementVisible('body')
        // .saveScreenshot(config.imgpath(browser) + 'a-screenshot-description.png')
        // .pause(1000)
        // .assert.containsText('.kp-hc > div', 'Kass')
        // .click('#hdtb-msb-vis > div:nth-child(2) > a')
        // .clearValue('#i_am_a_textbox')
        // .setValue('#i_am_a_textbox', 'albert')
        // .click('checked_checkbox')
        // .click('unchecked_checkbox')
        // .saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz.png')
        // .end();