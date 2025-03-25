<?php
$host = 'localhost';
$db   = 'login_system';
$user = 'root'; // Change as needed
$pass = 'JLRnt79U9FKYI1I1myGQpGESvmK3f4HLEl3fmVEhBlMHxOXoptGh3Zz3wzqaOKuT'; // Change if you have a password

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>