<?php
if (isset($_POST['submit'])) {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $service = htmlspecialchars(trim($_POST['service']));
    $msg = htmlspecialchars(trim($_POST['msg']));


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script LANGUAGE='JavaScript'>
                window.alert('Invalid email format');
                window.location.href='index.html';
              </script>";
        exit;
    }

    $to = 'nc@bdseducation.in';
    $subject = "Contact Form Details BDS Education";
    $message = "<html>
                    <head>
                        <title>Contact Form Details BDS Education</title>
                    </head>
                    <body>
                        <p>Contact Form Details BDS Education</p>
                        <p><b>Name:</b> $name</p>
                        <p><b>Email:</b> $email</p>
                        <p><b>Phone:</b> $phone</p>
                        <p><b>Service:</b> $service</p>
                        <p><b>Message:</b> $msg</p>
                    </body>
                </html>";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n"; 
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html\r\n";

    $retval = mail($to, $subject, $message, $headers);
    if ($retval) {
        echo "<script LANGUAGE='JavaScript'>
                window.location.href='index.html';
              </script>";
    } else {
        echo "<script LANGUAGE='JavaScript'>
                window.alert('Something went wrong. Please try again later.');
                window.location.href='index.html';
              </script>";
    }
}
?>