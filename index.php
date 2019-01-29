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
    <?php $level = $_GET['level'];?>
    <div id="get_level" data-json="<?php echo $level ?>">

    </div>
    <div class="container">
      <canvas class="line-chart"></canvas>
    </div>

    <div class="container">
      <canvas class="pie-chart"></canvas>
    </div>

    <div class="container">
      <canvas class="2lines-chart"></canvas>
    </div>
    <!--Milestone 1 con js compreso in php-->
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


      <!-- <script src="mainMS2.js"></script> -->

      <script src="mainMS3.js"></script>

  </body>
</html>
