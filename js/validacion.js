class Validacion {
    constructor() {
      this.correoValido = "belkiss.miranda@gmail.com";
      this.passwordValido = "123456789";
    }
  
    validar(email1, password1) {
      if (email1 != this.correoValido) {
        alert("correo no valido");
        return;
      }
  
      if (password1 != this.passwordValido) {
        alert("contraseña no valida");
        return;
      }
  
      alert("Bienvenido");
  
      // este codigo es para agregar texto a un elemento html
      // primero se obtiene el elemento con el id contenido
      const contenido = document.getElementById("contenido");
  
      // luego se agrega el texto con la propiedad innerHTML
      contenido.innerHTML = "Bienvenido";
    }
  }
  
  const validacion = new Validacion();
  
  function validarLogin() {
    const email1 = document.getElementById("email1").value;
    const password1 = document.getElementById("password1").value;
  
    validacion.validar(email1, password1);
  }
  
  