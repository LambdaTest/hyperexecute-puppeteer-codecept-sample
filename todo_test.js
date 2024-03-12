Feature('ToDo');

Scenario('create todo item', ({ I }) => {
  I.amOnPage('https://lambdatest.github.io/sample-todo-app/');
  I.wait(10);
  I.fillField('Want to add more', 'Write a guide');
  I.wait(10);
  I.click('#addbutton');
  I.wait(10);
  I.see('Write a guide');
  I.wait(10);
  I.see('6 of 6 remaining', '.ng-binding');
});