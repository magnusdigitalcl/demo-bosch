function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "demo@bosch.cl" && pass === "zaqxsw123") {
    window.location.href = "checkout.html";
  } else {
    alert("Credenciales inválidas");
  }
}

function logout() {
  window.location.href = "index.html";
}


