<?php
// Connect to the database
$conn = new mysqli('localhost', 'root', '', 'signup_register');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Capture form data
$email = $_POST['email'];
$password = $_POST['password'];

// Check if the user exists in the database
$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User found, redirect to the home page or dashboard
    header("Location: home.html");
    exit();
} else {
    // User not found, show an error message
    echo "Invalid email or password. Please try again.";
}

// Close connection
$conn->close();
?>
