<?php
$host = 'localhost';
$dbname = 'signup_register';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = $_GET['query'] ?? '';

$sql = "SELECT * FROM games WHERE name = '$query' LIMIT 1";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $genre = $row['genre'];

    header('Location: /' . $genre . '/' . $genre . '.html');
    exit;  
} else {
    echo "No such game exists.";
}

$conn->close();
?>
