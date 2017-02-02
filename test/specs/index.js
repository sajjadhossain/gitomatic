describe('git account features', function() {
  it('gets log since last Sunday', function() {
    var gitomatic = require('../../index');
    var getLastPushesSinceSunday = gitomatic.getLastPushesSinceSunday();

    console.log(getLastPushesSinceSunday);
  })
})
