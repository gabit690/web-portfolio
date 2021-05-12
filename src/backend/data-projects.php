<?php 

  require 'database.php';

  $sql = "SELECT * FROM projects";
  $result = $conn->query($sql);

  $projects = array();

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      
      $project = array(
        'id' => intval($row["Id"]),
        'title' =>  $row["Title"],
        'description' => $row["Description"],
        'image' => "/web-portfolio/dist/backend/thumbnails/" . $row["Thumbnail"],
        'url' => $row["Url"]
      );

      array_push($projects, $project);

    }
  } else {
    echo "0 results";
  }

  echo json_encode($projects);

  $conn->close();

?>