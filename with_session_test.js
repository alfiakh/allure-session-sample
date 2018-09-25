Feature('test');

Scenario('open google with session', (I) => {
  I.amOnPage('http://google.com');
  session('second', () => {
    I.amOnPage('http://google.com');
  })
})
