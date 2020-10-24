
function validar (){
    let usuario = document.getElementById("usuario").value
    let pass = document.getElementById("password").value
  
    if(usuario != "" && pass != ""){
      if (/^(\w+([\.-]?\w+)*)*@(\w+([\.-]?\w+)*)*$/.test(usuario)){
        alert ("Ingreso correctamente")
        }
      else {
        alert("El usuario debe contener @.")
        }
      }
    else{
      alert("El usuario y clave no deben ser vacios")
    }
    }