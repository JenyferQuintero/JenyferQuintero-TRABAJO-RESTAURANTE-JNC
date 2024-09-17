function FCargaInicial(){
    document.Login.addEventListener("invalid", Invalida, true);
    document.getElementById("Log").addEventListener("click", IniciaSesion);
    document.getElementById("Log").addEventListener("click", Valida); // Corrección: getElementById y addEventListener
}

function Invalida(g){
    var carg = g.target;
    carg.style.backgroundColor = "yellow";
}

function Valida(gvali){
    var carg = gvali.target;
    carg.style.backgroundColor = "blue";
}

function IniciaSesion(){
    var inicio = document.Login.checkValidity();
    if (inicio) {
        document.Login.submit(); // Enviar el formulario si es válido
    } else {
        alert("Datos incompletos");
    }
    
    // No existe DataView para formularios. Puedes usar FormData para obtener los datos
    var formData = new FormData(document.Login);
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ': ' + pair[1]); // Muestra los datos del formulario en la consola
    }
}

window.addEventListener("load", FCargaInicial, false);

<article class="arc">
    <a href="./indexlogin.html" style="text-decoration: none;">Regresar</a>
</article>

