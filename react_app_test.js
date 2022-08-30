Feature('React Apps');

Scenario('try react app', ({ I }) => {
  I.amOnPage('https://ahfarmer.github.io/calculator/');
  I.click('7');
  I.wait(10);
  I.seeElement({ react: 't', props: { name: '5' } });
  I.click('button', { react: 't', props: { name: '2' } });
  I.wait(10);
  I.click('button', { react: 't', props: { name: '+' } });
  I.wait(10);
  I.click('button', { react: 't', props: { name: '9' } });
  I.wait(10);
  I.click('button', { react: 't', props: { name: '=' } });
  I.wait(10);
  I.seeElement({ react: 't', props: { value: '81' } });
});
