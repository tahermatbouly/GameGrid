<?php
// Database connection details
$host = 'localhost';
$dbname = 'signup_register';
$username = 'root';
$password = '';

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the query parameter from the URL (from the form submission)
$query = $_GET['query'] ?? '';

// SQL query to search for the game by name (no security checks as per your request)
$sql = "SELECT * FROM games WHERE name = '$query' LIMIT 1";
$result = $conn->query($sql);

// Check if the game exists in the database
if ($result && $result->num_rows > 0) {
    // Game found, fetch the genre
    $row = $result->fetch_assoc();
    $genre = $row['genre'];

    // Redirect to a page based on the genre
    header('Location: /' . $genre . '/' . $genre . '.html');
    exit;  // Stop further execution
} else {
    // Game not found, tell the user
    echo "No such game exists.";
}

$conn->close();
?>
