<?php
require 'connect.php';
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

$query_sql = "INSERT INTO contact (firstName, lastName, email, number, message) VALUES ('$firstName', '$lastName', '$email', '$number', '$message')";

if (mysqli_query($conn, $query_sql)) {
  header("Location: Index.html");
} else {
  echo
  "
  <script> alert('Connection Failed'); </script>
  " . mysqli_error($conn);
}