<?php
$conn = new mysqli("localhost", "root", "", "tareas_db");

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}
?>