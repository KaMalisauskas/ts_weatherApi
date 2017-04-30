var rainy = "https://img.clipartfest.com/e1eba307575ab08c548c832b1c4b7dc0_sad-rain-cloud-clip-art-free-animated-rainy-cloud-clipart_2000-2000.png"

function call_ajax(city) {
  $.ajax({
      //settings
      url: "http://api.openweathermap.org/data/2.5/forecast/daily",
      method: "GET",
      contenttypeL: "application/json; charset=UTF-8",
      data: {
        q: city,
        APPID: "b765561809a7e37aa130c790120cccb7",
        "units":"metric",

      },
      success: handleResults
  });
}

function search(city) {
  console.log(city)
  call_ajax(city);
  // location
  for (var i = 0; i <=4; i++) {
  $(".firstDay .location span")[i].innerHTML = city;
}
}
function handleResults(response_body) {
  var days = response_body.list;
  console.log(response_body.list)
  for (var i = 0; i <= 4; i++)
  {
    $(".firstDay .top #icon")[i].src = "http://openweathermap.org/img/w/" + response_body.list[i].weather[0].icon + ".png";
    $(".firstDay .temperature span")[i].innerHTML = Math.round(response_body.list[i].temp.day);
    $(".firstDay .humidity span")[i].innerHTML = response_body.list[i].humidity;
    $(".firstDay .wind #wind")[i].innerHTML = response_body.list[i].speed;

  }
}

$("document").ready(function() {
 $("#submit").on('click', function() {
   var city = $('.search_bar')[0].value;
   search(city);
 })
 $(".search_bar").keypress(function(e) {
   if (e.which == 13) // Enter
   {
     var city = $('.search_bar')[0].value;
     search(city);
   }
 })
})
