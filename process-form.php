<?php

$name = isset($_POST['name']) ? $_POST['name'] : '';
$mail = isset($_POST['email']) ? $_POST['email'] : '';
$comments = isset($_POST['comment']) ? $_POST['comment'] : '';

$message = "You have new contact form request from your site. Here are details <br/>Name:{$name}.<br/>Email:{$mail}.<br/>Comment:{$comments}. <br/> Do not reply this email back";

mail('dharmik.patel101097@gmail.com', 'New Contact From website', $message);

echo "success";
die;
?>