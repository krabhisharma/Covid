$(document).ready(function () {
    
    $.getJSON("https://api.covid19india.org/data.json", function (data) {
      var states = [];
      var confirmed = [];
      var recovered = [];
      var deaths = [];
      var active = [];
  
      var total_active;
      var total_confirmed;
      var total_recovered;
      var total_deaths;
  
      var date = [];
      var totalconfirmed = [];
      var totaldeceased = [];
      var totalrecovered = [];
  
      
      total_active = data.statewise[0].active;
      total_confirmed = data.statewise[0].confirmed;
      total_recovered = data.statewise[0].recovered;
      total_deaths = data.statewise[0].deaths;


      var tbody = $('.table'),
        props = ["state", "confirmed", "active", "recovered", "deaths"];
      $.each(data.statewise, function (i, obj) {
        var tr = $('<tr>');
        $.each(props, function (i, prop) {
          $('<td >').html(obj
            [prop]).appendTo(tr);
        });
        tbody.append(tr);
      });
  
      
      $.each(data.statewise, function (id, obj) {
        states.push(obj.state);
        confirmed.push(obj.confirmed);
        recovered.push(obj.recovered);
        deaths.push(obj.deaths);
        active.push(obj.active);
      });
      $.each(data.cases_time_series, function (id, obj) {
        date.push(obj.date);
        totalconfirmed.push(obj.totalconfirmed);
        totaldeceased.push(obj.totaldeceased);
        totalrecovered.push(obj.totalrecovered);
      });
      states.shift();
      confirmed.shift();
      recovered.shift();
      deaths.shift();
      active.shift();
      console.log(states);

      $("#confirmed").append(total_confirmed);
      $("#active").append(total_active);
      $("#recovered").append(total_recovered);
      $("#deaths").append(total_deaths);
    });
})

