// show time 
var spantime = document.getElementById('time');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  spantime.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}
setInterval(time, 1000);

// show date 
var spandate = document.getElementById('date');

const date = new Date().toDateString();
spandate.textContent = date;

//// prevent enter for forms

// $(document).ready(function() {
//   $(window).keydown(function(event){
//     if(event.keyCode == 13) {
//       event.preventDefault();
//       return false;
//     }
//   });
// });

$(function(){
    $('input,select,textarea').persist();   
    session :false
  });
  