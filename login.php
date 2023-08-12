<?php

$host = 'localhost';
$username = 'root';
$password = 'root';
$database = 'login';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['reg'])) {
    $username = $conn->real_escape_string($_POST['username']);
    $NIC_NO = $conn->real_escape_string($_POST['NIC_NO']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (username, NIC_NO, email, password) VALUES ('$username', '$NIC_NO', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
        echo "window.location='ha.html';";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>


    