<?php 

  $data = json_decode(file_get_contents("php://input"), true);

  $name = $data["name"];
  $email = $data["email"];
  $comment = $data["comment"];

  $result = mail($email, "PRUEBA MAIL PHP", $comment);

  echo $result;

?>