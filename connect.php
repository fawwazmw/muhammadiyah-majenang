<?php
$servername = "localhost";
$database = "muhammadiyah";
$username = "root";
$password = "";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
  die("Connection Failed : " . mysqli_connect_error());
} else {
  echo
  "
  <script> alert('Data Inserted Successfully'); </script>
  ";
}

