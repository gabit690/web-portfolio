<?php 
  $servername = $username = $password = $database = "";
  $environment = "production";

  switch($environment) {
    case "production":
      $servername = "sql304.epizy.com";
      $username = "epiz_28651847";
      $password = "qvDhtdtWSX";
      $database = "epiz_28651847_portfolio";
      break;
    default:
      $servername = "localhost";
      $username = "root";
      $password = "";
      $database = "portfolio";
  }

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
?>