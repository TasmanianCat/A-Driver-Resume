<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userName = trim($_POST['userName']);
    $userEmail = trim($_POST['userEmail']); 
    $userPhone = trim($_POST['userPhone']);  
    $messageSubject = trim($_POST['messageSubject']); 
    $userMessage = trim($_POST['userMessage']); 

    // Do some validation on the input data
    if (empty($userName) || empty($userEmail) || empty($userPhone) || empty($messageSubject) || empty($userMessage)) {
        // If any of the fields are missing or empty, show an error
        echo 'Please fill out all fields. Пожалуйста';
    } else {
        // If everything looks good, send the email
        $to = 'example@gmail.com';
        $subject = 'A new message from "www.example.space"';
        $body = "From: $userName\nEmail: $userEmail\nPhone: $userPhone\nMessage subject: $messageSubject\nUser Message: $userMessage";

        // Attempt to send the email and check if successful
        if (mail($to, $subject, $body)) {
            echo 'Email sent successfully.';
        } else {
            echo 'Failed to send email. Please check your server configuration.';
        }
    }
}
?>
