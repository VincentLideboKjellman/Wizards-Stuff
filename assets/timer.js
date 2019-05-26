
// SIMPLER COUNT UP TIMER
// var minutesLabel = document.getElementById("minutes");
// var secondsLabel = document.getElementById("seconds");
// var totalSeconds = 0;

// function gameTimer(){
// setInterval(setTime, 1000);

// function setTime() {
//   ++totalSeconds;
//   secondsLabel.innerHTML = pad(totalSeconds % 60);
//   minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }

// function pad(val) {
//   var valString = val + "";
//   if (valString.length < 2) {
//     return "0" + valString;
//   } else {
//     return valString;
//   }
// }
// }


// COUNT UP TIMER INDEPENDENT FROM LAG

//html
//  <div class="countup" id="countup1">
// 				<span class="timeel minutes">00</span>
// 				<span class="timeel timeRefMinutes">minutes</span>
// 				<span class="timeel seconds">00</span>
// 				<span class="timeel timeRefSeconds">seconds</span>
// 			  </div>

// window.onload = function() {

    //to get current time into an variable
    // var today = new Date();
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;

    // countUpFromTime(dateTime, 'countup1');
//   };
  // function countUpFromTime(countFrom, id) {
  //   countFrom = new Date(countFrom).getTime();
  //   var now = new Date(),
  //       countFrom = new Date(countFrom),
  //       timeDifference = (now - countFrom);
  //
  //   var secondsInADay = 60 * 60 * 1000 * 24,
  //       secondsInAHour = 60 * 60 * 1000;
  //
  //   mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  //   secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  //
  //   var idEl = document.getElementById(id);
  //   idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  //   idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
  //
  //   clearTimeout(countUpFromTime.interval);
  //   countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  // }
