function updateTime() {
  // datetime in "America/Chicago" timezone in the "en-US" locale
  let los_angeles = new Date().toLocaleString("en-US", {hour12: false, timeZone: "America/Los_Angeles"});
  let new_york = new Date().toLocaleString("en-US", {hour12: false, timeZone: "America/New_York" });
  let copenhagen = new Date().toLocaleString("en-US", {hour12: false, timeZone: "Europe/Copenhagen" });
  let hong_kong = new Date().toLocaleString("en-US", {hour12: false, timeZone: "Asia/Hong_kong" });
  let madrid = new Date().toLocaleString("en-US", {hour12: false, timeZone: "Europe/Madrid" });
  let dubai = new Date().toLocaleString("en-US", {hour12: false, timeZone: "Asia/Dubai" });
  let london = new Date().toLocaleString("en-US", {hour12: false, timeZone: "Europe/London" });
  

  // "3/22/2021, 5:05:51 PM"
  console.log(new_york);

  document.getElementById('los_angeles').innerHTML = los_angeles;
  document.getElementById('new_york').innerHTML = new_york;
  document.getElementById('copenhagen').innerHTML = copenhagen;
  document.getElementById('hong_kong').innerHTML = hong_kong;
  document.getElementById('madrid').innerHTML = madrid;
  document.getElementById('dubai').innerHTML = dubai;
  document.getElementById('london').innerHTML = london;
  
  
  }

function showTime() {
  var city = document.getElementById("city").value;
  var date = new Date();
  var options = { timeZone: city, timeStyle: "medium" };
  var time = date.toLocaleTimeString([], options);
  document.getElementById("time").innerHTML = "The time in " + city + " is " + time;
}


setInterval(updateTime, 1000); // Update time display every second