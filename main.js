
$(document).ready(function(){
  $.ajax({
    url : 'http://localhost/php-chartbool/server.php',
    method : 'GET',
    success : function(data)
    {
        printPie(data);

    },
    error: function()
    {
      alert("si è verificato un errore");
    },
  });
});

function printPie(results){
  var datafromserver = JSON.parse(results);
  // console.log(datafromserver);
  var arrayVenditori = [];
  var arrayAmmVendite = [];
  var fatturatoTotale = 0;
  for (var venditore in datafromserver){
    fatturatoTotale += (datafromserver[venditore]);
  };
  for (var venditore in datafromserver){
    var percentualefatt = (datafromserver[venditore] / fatturatoTotale) * 100;
    // var percentualefatt =  / fatturatoTotale *100;
    arrayVenditori.push(venditore);
    arrayAmmVendite.push(percentualefatt.toFixed(2));
    // console.log(fatturatoTotale);
    // console.log(datafromserver[venditore]);
  };
  var typeofchart = $('.pie-chart').attr('data-json');
  console.log(typeofchart);
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

// function printLine(results){
//
//   var months = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
//
//   var database = JSON.parse(results);
//   console.log(database);
//
//   $(document).ready(function(){
//     var ctx = $('.line-chart');
//     var chart = new Chart(ctx, {
//     type: 'line',
//       data: {
//           labels: months,
//           datasets: [{
//               label: "vendite",
//               backgroundColor: 'rgb(255, 99, 132)',
//               borderColor: 'rgb(255, 99, 132)',
//               data: database,
//           }]
//         },
//       });
//     });
//   };
