// milestone 2 con js esterno e database graphs
$(document).ready(function(){
  $.ajax({
    url : 'http://localhost/php-chartbool/serverMS2.php',
    method : 'GET',
    success : function(answer)
    {
        var results = JSON.parse(answer);
        printLine(results);
        printPie(results);
    },
    error: function()
    {
      alert("si è verificato un errore");
    },
  });
});

function printPie(data){
  var dataMS2pie = data['fatturato_by_agent']['data'];
  var arrayVenditori = [];
  var arrayAmmVendite = [];
  var fatturatoTotale = 0;
  for (var venditore in dataMS2pie){
    fatturatoTotale += (dataMS2pie[venditore]);
  };
  for (var venditore in dataMS2pie){
    var percentualefatt = (dataMS2pie[venditore] / fatturatoTotale) * 100;
    // var percentualefatt =  / fatturatoTotale *100;
    arrayVenditori.push(venditore);
    arrayAmmVendite.push(percentualefatt.toFixed(2));
    // console.log(fatturatoTotale);
    // console.log(dataMS2pie[venditore]);
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

function printLine(results){
  var dataMS2line = results['fatturato']['data'];
  var typeofchart = results['fatturato']['type'];
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
              data: dataMS2line,
          }]
        },
      });
    });
  };
