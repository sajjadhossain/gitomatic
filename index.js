var shell = require('shelljs');
var beforeOneWeek = new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000)
  , day = beforeOneWeek.getDay()
  , diffToMonday = beforeOneWeek.getDate() - day + (day === 0 ? -6 : 1)
  , lastMonday = new Date(beforeOneWeek.setDate(diffToMonday))
  , lastSunday = new Date(beforeOneWeek.setDate(diffToMonday + 6));

module.exports = {
  getLastPushesSinceSunday: function() {

    // 2014-02-12T16:36:00-07:00
    var run = shell.exec(
      'git add -A . && ' +
      'git commit -m "' + lastSunday + '" --GIT_AUTHOR_DATE="' + lastSunday + '" --GIT_COMMITTER_DATE= "' + lastSunday + '"',
      {silent:true}
    )
    var statusCode = run.code;
    var stderr = run.stderr;
    var stdout = run.stdout;
    var output = {
      statusCode,
      stderr,
      stdout
    };

    return output;
  }
};
