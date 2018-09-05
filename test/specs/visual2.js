describe('my second visual test', function () {
  it('should look visually perfect', async function () {
    browser.url('./helloworld');

    const pageTitle = browser.getTitle();

    console.log(`Title of page is ${pageTitle}`)

    browser.checkWindow('Main Page');
  })

  it('should take snapshot after click', async function () {
    browser.url('./helloworld');

    browser.checkWindow('Before Click');

    browser.click('button');

    browser.checkWindow('After click!');
  })
});