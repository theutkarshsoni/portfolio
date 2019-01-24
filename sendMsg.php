<?php
	$to = "utkarshsoni.nptel@gmail.com";
	$subject = "Message from Portfolio";

	$name = $_POST['cname'];

	$email_address = $_POST['cemail'];
    $email_address = filter_var($email_address, FILTER_SANITIZE_EMAIL);
    $email_address = filter_var($email_address, FILTER_VALIDATE_EMAIL);

	$email_subject = $_POST['csubject'];

	$headers = 'From:' . $email_address . "\r\n";
    $headers .= 'Cc:' . $email_address . "\r\n";

    $headers .= "Content-Type: text/html";

    $message = "<html><body>";

	$message .= "<h3>Name</h3> $name <br> <h3>Email</h3> $email_address <br> <h3>Subject</h3> $email_subject <br> <h3>Message</h3> ";

	$message .= $_POST['cquery'];

	$message .="</body></html>";

	if (mail($to, $subject, $message, $headers)) {
		echo "<script type='text/javascript'>
				$(document).ready(function(){
					$('#successModal').modal('show');
				});
			</script>";

	}
	else{
		echo "<script type='text/javascript'>
				$(document).ready(function(){
					$('#errorModal').modal('show');
				});
			</script>";
	}
?>