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
      <?php include 'database.php' ?>
      <canvas class="line-chart" data-json="<?php echo $type_line ?>"></canvas>
    </div>

    <div class="container">
      <canvas class="pie-chart" data-json="<?php echo $type_pie ?>"></canvas>
    </div>
    <!--Milestone 1-->
    <!-- <script>
      <?php // include 'database.php' ?>;
      var months = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];

      var phpdatabase = "<?php // echo json_encode($database); ?>";

      var database = JSON.parse(phpdatabase);
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
      </script> -->

      <!--Milestone 2 -->
      <script src="main.js"></script>
  </body>
</html>
