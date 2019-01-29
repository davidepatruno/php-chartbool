$(document).ready(function(){
  $.ajax({
    url : 'http://localhost/php-chartbool/serverMS3.php',
    method : 'GET',
    success : function(answer)
    {
        var results = JSON.parse(answer);

        livello(results);
        // printLine(results);
        // printPie(results);
        // print_2lines(results);

    },
    error: function()
    {
      alert("si è verificato un errore");
    },
  });
});

function printPie(data){
  var dataMS3pie = data['fatturato_by_agent']['data'];
  var arrayVenditori = [];
  var arrayAmmVendite = [];
  var fatturatoTotale = 0;
  for (var venditore in dataMS3pie){
    fatturatoTotale += (dataMS3pie[venditore]);
  };
  for (var venditore in dataMS3pie){
    var percentualefatt = (dataMS3pie[venditore] / fatturatoTotale) * 100;
    // var percentualefatt =  / fatturatoTotale *100;
    arrayVenditori.push(venditore);
    arrayAmmVendite.push(percentualefatt.toFixed(2));
    // console.log(fatturatoTotale);
    // console.log(dataMS3pie[venditore]);
  };
  var typeofchart = data['fatturato_by_agent']['type'];
  var myPieChart = new Chart($('.pie-chart'),{
      type: typeofchart,
      data: {
        datasets: [{
            data: arrayAmmVendite,
            labels: arrayVenditori,
            backgroundColor: [
             'rgba(100, 200, 120)',
             'rgba(200, 180, 120)',
             'rgba(160, 100, 150)',
             'rgba(250, 100, 150)'
         ],
        }],
        labels: arrayVenditori,
      }
    });
};

function printLine(data){
  var dataMS3line = data['fatturato']['data'];
  var typeofchart = data['fatturato']['type'];
  var months = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];

  $(document).ready(function(){
    var ctx = $('.line-chart');
    var chart = new Chart(ctx, {
    type: typeofchart,
      data: {
          labels: months,
          datasets: [{
              label: "vendite",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: dataMS3line,
          }]
      },
    });
  });
};


function print_2lines(data){
  var dataMS3_2lines = data['team_efficiency']['data'];
  var months = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];

  $(document).ready(function(){
    var ctx = $('.2lines-chart');
    var chart = new Chart(ctx, {
    type: 'line',
      data: {
          labels: months,
          datasets: [{
              label: "Team1",
              borderColor: 'rgb(50, 200, 200)',
              data: dataMS3_2lines['Team1'],
            },{
              label: "Team2",
              borderColor: 'rgb(120, 60, 100)',
              data: dataMS3_2lines['Team2'],
            },{
              label: "Team3",
              borderColor: 'rgb(60, 120, 200)',
              data: dataMS3_2lines['Team3'],
            }
          ]
        },
    });
  });
};


function livello(data){
  var user_inputlvl = location.search;
  for (var section in data){
    var livello = "?level=" + data[section]['access'];
    if (livello == user_inputlvl){
      switch (user_inputlvl){
        case "?level=guest" : printLine(data);
        break;
        case "?level=employee" :
          printLine(data);
          printPie(data);
        break;
        case "?level=clevel" :
          printLine(data);
          printPie(data);
          print_2lines(data);
      };
    };
  };
};
