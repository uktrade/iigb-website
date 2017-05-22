var baseUrl = process.env.BASE_IIGB_URL || 'http://localhost:3000';

describe('Accessibility testing', function() {

  beforeEach(function(done) {
    driver.get(baseUrl + '/int/industries/automotive/research-and-development').then(function () {
      driver.executeAsyncScript(function(callback) {
        var script = document.createElement('script');
        script.innerHTML = 'document.documentElement.classList.add("axe-is-ready");';
        document.documentElement.appendChild(script);
        callback();
      })
      .then(function () {
        return driver.wait(selenium.until.elementsLocated(selenium.By.css('.axe-is-ready')));
      })
      .then(function(){
        done();
      });
    });
  });

  it('the research and development page should be accessible', function (done) {
    AxeBuilder(driver)
      .analyze(function(results) {
        writeOutput("Research and development page");
        writeOutViolations(results.violations);
        writeOutReviews(results.incomplete);
        expect(results.violations.length).toBe(0);
        done();
      })
  });
});