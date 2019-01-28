<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
    <title>php-chartbool</title>
  </head>
  <body>
    <div class="container">
      <canvas class="line-chart"</canvas>
    </div>


    <script>
      <?php include 'database.php'; ?>
      var months = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];

      var data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];

      var phpdatabase = "<?php echo json_encode($database); ?>";

      database = JSON.parse(phpdatabase);
      console.log(data);
      console.log(database);

      $(document).ready(function(){
        var ctx = $('.line-chart');
        var chart = new Chart(ctx, {
        type: 'line',
          data: {
              labels: months,
              datasets: [{
                  label: "vendite",
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: database,
              }]
            },
          });
        });
      </script>

  </body>
</html>
