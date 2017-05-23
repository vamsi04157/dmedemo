module.exports = function() {

       this.Given(/^I have visited Google$/, function () {
        browser.url('http://google.com');
       });



       this.When('I search for "$string"', function (searchTerm) {
         browser.setValue('input[name="q"]}', searchTerm);
       });


       this.When(/^I see "([^"]*)"$/, function (arg1) {
        browser.waitForExist('a=' + "https://twitter.com");
       });



       this.Then(/^I click the site name$/, function () {

       });
     }
