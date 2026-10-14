Feature('React Apps');

// on mac the startup tab is closed along with Chrome's privacy sandbox dialog, so use a fresh one
Before(({ I }) => {
  I.openNewTab();
});

Scenario('try react app', ({ I }) => {
  I.amOnPage('https://zxcodes.github.io/Calculator/');
  I.waitForText('Calculator', 30);
  I.wait(3);
  I.click('7');
  I.click('2');
  I.click('+');
  I.click('9');
  I.click('=');
  I.wait(2);
});
