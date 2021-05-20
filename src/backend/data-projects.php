<?php 
  require './database/database.php';

  $pathImg = "";

  if ($environment == "production") {
    $pathImg = "/backend/thumbnails/";
  } else {
    $pathImg = "/web-portfolio/dist/backend/thumbnails/";
  }

  $sql = "SELECT * FROM Projects";
  $result = $conn->query($sql);
  $projects = array();


  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      $project = array(
        'id' => intval($row["Id"]),
        'title' =>  $row["Title"],
        'description' => $row["Description"],
        'image' => $pathImg . $row["Thumbnail"],
        'url' => $row["Url"]
      );
      array_push($projects, $project);
    }
  } else {
    echo $result->num_rows;
  }

  echo json_encode($projects);
  $conn->close();
?>