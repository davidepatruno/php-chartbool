<?php
$database = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];


$graphs = [
  'fatturato' => [
    'type' => 'line',
    'data' => [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]
  ],
  'fatturato_by_agent' => [
    'type' => 'pie',
    'data' => [
      'Marco' => 9000,
      'Giuseppe' => 4000,
      'Mattia' => 3200,
      'Alberto' => 2300,
    ]
  ]
];

$data_line = json_encode($graphs['fatturato']['data']);
$type_line = $graphs['fatturato']['type'];

$type_pie = $graphs['fatturato_by_agent']['type'];
?>
