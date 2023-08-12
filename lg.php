<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection information
    $hostname = "localhost";
    $database = "login";
    $usernameDB = "root";
    $passwordDB = "root";

    // Retrieve form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Create a new PDO instance for database connection
    try {
        $conn = new PDO("mysql:host=$hostname;dbname=$database", $usernameDB, $passwordDB);
        // Set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare and execute the SQL query to check if the user exists in the database
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();

        $user = $stmt->fetch();

        if ($user && $user['C'] === $password) {
            echo "Login successful!";
        } else {
            echo "Invalid username or password.";
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage(); // Handle errors as needed
    }

    // Close the database connection
    $conn = null;
}
?>
