<?php
$conn = new mysqli('localhost', 'root', '', 'signup_register');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    header("Location: home.html");
    exit();
} else {
    echo "Invalid email or password. Please try again.";
}

$conn->close();
?>
