Feature('ToDo');

// on mac the startup tab is closed along with Chrome's privacy sandbox dialog, so use a fresh one
Before(({ I }) => {
  I.openNewTab();
});

Scenario('create todo item', ({ I }) => {
  I.amOnPage('https://todomvc.com/examples/react/dist/');
  I.waitForElement('.new-todo', 30);
  I.fillField('.new-todo', 'Write a guide');
  I.pressKey('Enter');
  I.see('Write a guide', '.todo-list');
  I.see('1 item left', '.todo-count');
});
