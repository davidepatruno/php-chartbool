<?php
  include 'database.php';

  $data_pie = json_encode($graphs['fatturato_by_agent']['data']);

  echo $data_pie;

 ?>
