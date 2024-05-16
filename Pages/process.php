<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $note = htmlspecialchars($_POST['Note']);

    // Set the recipient email address
    $to = "vidhan0411@gmail.com"; // Replace with your email address

    // Set the email subject
    $subject = "New Contact Form Submission from " . $name;

    // Build the email content
    $message = "
    <html>
    <head>
      <title>Contact Form Submission</title>
    </head>
    <body>
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Note:</strong> $note</p>
    </body>
    </html>
    ";

    // Set the email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
