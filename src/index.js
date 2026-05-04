const API = "http://localhost/proyectotareitas/src/api";

// cargar tareas
function cargar() {
  fetch(API + "/get.php")
    .then(res => res.json())
    .then(data => {
      console.log(data); // 👈 IMPORTANTE para ver qué llega

      let lista = document.getElementById("lista");
      lista.innerHTML = "";

      data.forEach(t => {
        let li = document.createElement("li");
        li.innerText = t.texto; // 👈 importante: "texto"

        li.onclick = () => eliminar(t.id);

        lista.appendChild(li);
      });
    })
    .catch(err => console.log("ERROR:", err));
}

// agregar tarea
function agregar() {
  let texto = document.getElementById("tareaInput").value;

  if (texto === "") return;

  fetch(API + "/add.php", {
    method: "POST",
    body: JSON.stringify({ texto })
  }).then(() => {
    document.getElementById("tareaInput").value = "";
    cargar();
  });
}

// eliminar tarea
function eliminar(id) {
  fetch(API + "/delete.php?id=" + id)
    .then(() => cargar());
}

cargar();