const { getGreeting } = require('../lib/greeting');

test('getGreeting returns a personalized greeting', () => {
  expect(getGreeting('Workshop')).toBe(
    'Hello, Workshop! This app was deployed automatically by Jenkins.'
  );
});
