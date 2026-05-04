<?php
include "db.php";

$result = $conn->query("SELECT * FROM tareas");

$tareas = [];

while ($row = $result->fetch_assoc()) {
  $tareas[] = $row;
}

header('Content-Type: application/json');
echo json_encode($tareas);
?>