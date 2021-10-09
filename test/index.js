const test = require('tape')

test('basic test', (t) => {
  t.equal(true, true, 'The structure of the universe okay')
  setTimeout(() => {
    t.end()
  }, 100)
})
