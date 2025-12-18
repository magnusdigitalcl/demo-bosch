function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  console.log(user+pass);

  if (user === "demo@bosch.cl" && pass === "zaqxsw123") {
    window.location.href = "checkout.html";
  } else {
    alert("Credenciales inválidas");
  }
}

function logout() {
  window.location.href = "index.html";
}




