<?php 
  $servername = $username = $password = $database = "";
  $environment = "production";

  switch($environment) {
    case "production":
      $servername = "sql209.epizy.com";
      $username = "epiz_29132675";
      $password = "SiLsdt4RzUHun";
      $database = "epiz_29132675_portfolio";
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