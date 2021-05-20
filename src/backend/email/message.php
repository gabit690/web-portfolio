<?php 
 
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;

  require './Exception.php';
  require './PHPMailer.php';
  require './SMTP.php';

  $data = json_decode(file_get_contents("php://input"), true);

  //Instantiation and passing `true` enables exceptions
  $mail = new PHPMailer(true);
  
  try {

      // Data from contact form
      $name = $data["name"];
      $email = $data["email"];
      $subject = $data["subject"];
      $comment = $data["comment"];

      //Server settings
      $mail->SMTPDebug = 0;                                         //Enable verbose debug output
      $mail->isSMTP();                                            //Send using SMTP
      $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
      $mail->Username   = 'gabit690@gmail.com';                     //SMTP username
      $mail->Password   = 'aydhfbduztoeqxjz';                               //SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
      $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
  
      //Recipients
      $mail->setFrom('gabit690@gmail.com', 'Gabit');
      $mail->addAddress('gabit690@gmail.com', 'Gabit-Receptor');     //Add a recipient
  
      //Content
      $mail->isHTML(false);                                  //Set email format to HTML
      $mail->Subject = $subject;
      $mail->Body    = "Mensaje de $name <$email>:\n\n$comment";
  
      $result = $mail->send();
      echo 'Message has been sent';
  } catch (Exception $e) {
      echo "ERROR";
  }

?>