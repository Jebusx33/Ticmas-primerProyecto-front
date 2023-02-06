 console.log("js on");


 var div_usuario = document.querySelector("#usuariosApp");
 var div_ImgUsuario = document.querySelector("#imgUsuariosApp");
 var div_NombreUsuario = document.querySelector("#nombreUsuarioApp");
 var div_EmailUsuario = document.querySelector("#emailUsuarioApp");
 var div_EmailUsuario2 = document.querySelector("#emailUsuario2App");
 var div_telefonoUsuario = document.querySelector("#telefonoUsuarioApp");
 var div_direccionUsuario = document.querySelector("#direccionUsuarioApp");
 const API_URL = "https://randomuser.me/api";
 
 
 getFetch()
     .then((res) => res.json())
     .then((users) => {
         console.log(users.results[0]);
         let objUsers = users.results[0]
        // mostrarUsuario(objUsers)
        mostrarImagenUsuario(objUsers)
        mostrarNombreUsario(objUsers)
        mostrarEmail(objUsers)
        mostrarEmail2(objUsers)
        mostrarDireccion(objUsers)
        mostrarTelefono(objUsers)
     })
     .catch((e) => console.log(e));
 
 
 function getFetch() {
     return fetch(`${API_URL}`)
 }
 
 

function mostrarImagenUsuario(element) {
    let usuarioImg = document.createElement("img")
    usuarioImg.classList.add('masthead-avatar','mb-4')
    usuarioImg.src=`${element.picture.large}`
    div_ImgUsuario.appendChild(usuarioImg)
}

function mostrarNombreUsario(element) {
    let usuarioNombre =document.createElement('h1')
    usuarioNombre.classList.add('masthead-heading', 'text-uppercase', 'mb-3', 'nombreUsuario')
    usuarioNombre.innerHTML = `${element.name.first} ${element.name.last}`
    div_NombreUsuario.appendChild(usuarioNombre)  
}


function mostrarEmail(element) {
    let usuarioEmail = document.createElement('p')
     usuarioEmail.classList.add('masthead-subheading', 'font-weight-light', 'lead')
     usuarioEmail.innerHTML = `${element.email}`
     div_EmailUsuario.appendChild(usuarioEmail)
}

function mostrarEmail2(element) {
    let usuarioEmail = document.createElement('p')
     usuarioEmail.classList.add('masthead-subheading', 'font-weight-light', 'lead')
     usuarioEmail.innerHTML = `${element.email}`
     div_EmailUsuario2.appendChild(usuarioEmail)
}

function mostrarDireccion(element) {
    let usuarioDire = document.createElement('p')
    usuarioDire.classList.add('masthead-subheading', 'font-weight-light', 'lead')
    console.log(element.location.street.number);
    usuarioDire.innerHTML = `${element.location.street.name} <br> ${element.location.street.number} `
    div_direccionUsuario.appendChild(usuarioDire);
}

function mostrarTelefono(element) {
    let usuarioCell = document.createElement("p")
     usuarioCell.innerHTML = `${element.cell}`
     usuarioCell.classList.add('masthead-subheading', 'font-weight-light', 'lead')
     div_telefonoUsuario.appendChild(usuarioCell);

}









/*
 function mostrarUsuario(element) {
     console.log(element);
     let tarjeta = document.createElement("div")
     tarjeta.classList.add("card", "m-2")
     tarjeta.style.width = "20rem";
     let tarjetaImg = document.createElement("img")
     tarjetaImg.classList.add('card-img-top')
     tarjetaImg.style.width = "7rem"
     tarjetaImg.style.marginLeft = "25%"
     tarjetaImg.src = `${element.picture.medium}`
     let tarjetaCuerpo = document.createElement("div")
     tarjetaCuerpo.classList.add('card-body')
     let tituloTarjeta = document.createElement("h5")
     tituloTarjeta.classList.add("card-title")
     tituloTarjeta.innerHTML = `<hr>Usuario: ${element.login.username}`
     //tituloTarjeta.style.color("blue")
     let nombre = document.createElement("p")
     nombre.classList.add("card-text")
     nombre.innerHTML = `Nombre: ${element.name.first}  
     <br> Apellido: ${element.name.last}
     <br> email: ${element.email}`
     div_usuario.appendChild(tarjeta)
     tarjeta.appendChild(tarjetaCuerpo);
     tarjetaCuerpo.appendChild(tarjetaImg)
     tarjetaCuerpo.appendChild(tituloTarjeta)
     tarjetaCuerpo.appendChild(nombre)
     document.getElementById("loadingFetch").style.display = "none";
 }
 
*/
 
