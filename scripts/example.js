// Description:
//   Example scripts for you to examine and try out.

module.exports = (robot) => {

  robot.hear(/привет/i, (res) => {
    res.send('Привет-привет')
  });

  let annoyIntervalId = null;
  let counter = 0;
  
  robot.hear(/таймер/, (res) => {
    if (annoyIntervalId) {
      return
    }

    annoyIntervalId = setInterval(() => res.send(counter++), 1000)
  });
  
  robot.hear(/выкл/, (res) => {
    if (!annoyIntervalId) {
      return
    }
  
    res.send('таймер остановлен');
    clearInterval(annoyIntervalId);
    annoyIntervalId = null
  })
};
