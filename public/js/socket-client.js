//Referencias HTML
const lblOnline = document.getElementById("lblOnline");
const lblOffline = document.getElementById("lblOffline");
const txtMensaje = document.getElementById("txtMensaje");

const socket = io();

socket.on("connect", () => {
  console.log("Conected");
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Disconnect");
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});

socket.on("enviar-mensaje", (payload) => {
  console.log(payload);
});

document.getElementById("btnEnviar").addEventListener("click", () => {
  const mensaje = txtMensaje.value;
  const payload = {
    mensaje,
    id: "123ABC",
    fecha: new Date().getTime(),
  };
  socket.emit("enviar-mensaje", payload, (id) => {
    console.log("Desde el server ", id);
  });
  console.log(mensaje);
});
