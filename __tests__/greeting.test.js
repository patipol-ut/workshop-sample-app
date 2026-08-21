const { getGreeting } = require('../lib/greeting');

test('getGreeting returns a personalized greeting', () => {
  expect(getGreeting('Workshop')).toBe(
    'This text is deliberately wrong so the test fails.'
  );
});
