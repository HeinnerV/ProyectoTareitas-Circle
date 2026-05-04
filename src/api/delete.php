<?php
include "db.php";

$id = intval($_GET["id"]);

$conn->query("DELETE FROM tareas WHERE id=$id");

echo json_encode(["ok" => true]);
?>