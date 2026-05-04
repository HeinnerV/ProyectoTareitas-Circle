<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);
$texto = $conn->real_escape_string($data["texto"]);

$conn->query("INSERT INTO tareas (texto) VALUES ('$texto')");

echo json_encode(["ok" => true]);
?>