<?php
// Connect to the database
$conn = new mysqli('localhost', 'root', '', 'signup_register');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Capture form data
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$username = $_POST['username'];
$phone = $_POST['phone'];
$date = $_POST['dob'];
$password = $_POST['password'];

// Insert data into the database
$sql = "INSERT INTO users (fname, lname, email, username, phone, dob, password) 
        VALUES ('$fname', '$lname', '$email', '$username', '$phone', '$date', '$password')";

if ($conn->query($sql) === TRUE) {
    // echo "Data saved successfully!";
    header("Location: /home.html");
} else {
    echo "Error: " . $conn->error;
}

// Close connection
$conn->close();
?>
