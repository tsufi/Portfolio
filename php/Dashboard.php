<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: index.html");
    exit;
}
?>
<h2>Welcome to the dashboard!</h2>
<a href="logout.php">Logout</a>