Feature('Feature with session');

Scenario('Scenario without session', (I) => {
  I.amOnPage('http://google.com');
})

Scenario('Scenario with session', (I) => {
  I.amOnPage('http://google.com');
  session('second', () => {
    I.amOnPage('http://google.com');
  })
})
