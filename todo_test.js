Feature('ToDo');

Scenario('create todo item', ({ I }) => {
  I.amOnPage('http://todomvc.com/examples/react/');
  I.wait(10);
  I.dontSeeElement('.todo-count');
  I.wait(10);
  I.fillField('What needs to be done?', 'Write a guide');
  I.wait(10);
  I.pressKey('Enter');
  I.wait(10);
  I.see('Write a guide', '.todo-list');
  I.wait(10);
  I.see('1 item left', '.todo-count');
});