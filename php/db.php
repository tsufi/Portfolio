<?php
$host = 'localhost';
$db   = 'loginsystem';
$user = 'site'; // Change as needed
$pass = '1l3mdtkrabGiGqJc8UwB'; //ve a password

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>