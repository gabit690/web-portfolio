<?php 
  $data = json_decode(file_get_contents("php://input"), true);
  $name = $data["name"];
  $email = $data["email"];
  $subject = $data["subject"];
  $comment = $data["comment"];
  $message = "Mensaje de $name <$email>:\n\n$comment";
  $result = mail("gabit690@gmail.com", $subject, $message);
  echo $result;
?>