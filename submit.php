<?php
require 'connect.php';

// Mengambil data dari form yang dikirimkan menggunakan metode POST
$firstName = mysqli_real_escape_string($conn, $_POST['firstName']);
$lastName = mysqli_real_escape_string($conn, $_POST['lastName']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$number = mysqli_real_escape_string($conn, $_POST['number']);
$message = mysqli_real_escape_string($conn, $_POST['message']);

// Query SQL untuk menyisipkan data ke dalam tabel "contact"
$query_sql = "INSERT INTO contact (firstName, lastName, email, number, message) VALUES ('$firstName', '$lastName', '$email', '$number', '$message')";

if (mysqli_query($conn, $query_sql)) {
  // Jika penyisipan data berhasil, arahkan pengguna ke "Index.html"
  header("Location: Index.html");
} else {
  // Jika terjadi kesalahan, tampilkan pesan kesalahan
  echo "<script>alert('Connection Failed: " . mysqli_error($conn) . "');</script>";
}

// Tutup koneksi ke database
mysqli_close($conn);
?>
