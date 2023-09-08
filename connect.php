<?php
$servername = "localhost";
$database = "muhammadiyah";
$username = "root";
$password = "";

// Membuat koneksi ke database
$conn = mysqli_connect($servername, $username, $password, $database);

// Memeriksa apakah koneksi berhasil
if (!$conn) {
    die("Connection Failed : " . mysqli_connect_error());
} else {
    // Jika koneksi berhasil, Anda dapat menyisipkan data ke dalam tabel di sini
    $name = "John Doe";
    $email = "johndoe@example.com";

    $sql = "INSERT INTO nama_tabel (nama, email) VALUES ('$name', '$email')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Data Inserted Successfully');</script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Menutup koneksi ke database
mysqli_close($conn);
?>
