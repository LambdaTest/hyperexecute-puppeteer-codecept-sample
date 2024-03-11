Feature('React Apps');

Scenario('try react app', ({ I }) => {
  I.amOnPage('https://zxcodes.github.io/Calculator/');
  I.click('7');
  I.wait(5);
  I.click('2');
  I.wait(5);
  I.click('+');
  I.wait(5);
  I.click('9');
  I.wait(5);
  I.click('=');
  I.wait(10);
  I.seeElement('#result');
});
