const mathjs = require('mathjs');
const boxen = require('boxen');

let handle;

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
      .pause(1000)
      .waitForElementVisible('//*[@id="Trenniväljak"]')
      .click('//*[@id="Trenniväljak"]')
      .pause(1000)
      .waitForElementVisible('/html/body/div[2]/div[2]/div/table/tbody/tr[2]/td[1]/table/tbody/tr[8]/td[2]/a')
      .click('/html/body/div[2]/div[2]/div/table/tbody/tr[2]/td[1]/table/tbody/tr[8]/td[2]/a')
      .pause(1000)
      .windowHandles(function (result) {
        // An array of window handles.
        handle = result;
        // console.log(handle.value);
        browser.switchWindow(handle.value[1]);
      })
      .click('//*[@id="btnAlusta"]')
      .pause(500)
      .getText('//*[@id="txtTehtav"]', function (result) {
        for (let x = 0; x < 40; x++) {
          browser
            .waitForElementVisible('//*[@id="txtTehtav"]')
            .getText('//*[@id="txtTehtav"]', function (result) {
              // console.log(result);
              let split = result.value.split('=')[0];
              // console.log(split);
              split = split.replace('x', '*');
              split = split.replace(':', '/');
              let answer = "   ";
              answer = mathjs.evaluate(split).toString();
              console.log(boxen(
                'Test ' + x + ':  ' + split + ' = ' + answer
              ));
              for (var i = 0; i < answer.length; i++) {
                let xPath = '//*[@id="nr' + answer.charAt(i) + '"]';
                // console.log(xPath)
                browser.click(xPath);
              }
              browser.click('//*[@id="OK"]');
            })
        }
      })
      .end();
  }
};
