<?php
$conn = new mysqli('localhost', 'root', '', 'signup_register');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$username = $_POST['username'];
$phone = $_POST['phone'];
$date = $_POST['dob'];
$password = $_POST['password'];

$sql = "INSERT INTO users (fname, lname, email, username, phone, dob, password) 
        VALUES ('$fname', '$lname', '$email', '$username', '$phone', '$date', '$password')";

if ($conn->query($sql) === TRUE) {
    header("Location: /home.html");
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
