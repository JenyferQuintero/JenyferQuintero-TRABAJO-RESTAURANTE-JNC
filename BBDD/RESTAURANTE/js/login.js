
    function FCargaInicial(){
        document.Login.addEventListener("invalid",Invalida,true);
        document.getElementById("Log").addEventListener("click",IniciaSesion);
        document.getAnimations("Log").adEventListener("click",Valida);
    }
    function Invalida(g){
        var carg=g.target;
        carg.style.backgroundColor="yellow";
    }
    function Valida(gvali){
        var carg=gvali.target;
        carg.style.backgroundColor="blue";
    }
    function IniciaSesion(){
        var inicio= document.Login.checkValidity();
        if (inicio==true){
            document.Login.submit();
        }
        if(inicio==false){
            alert("Datos incompletos");
        }
        var sesion= document.Login.DataView();
        alert(sesion= document.Login)
    }
    window.addEventListener("load",FCargaInicial, false);


<article class="arc">
        <a href="./Indexlogin.html" style="text-decoration: none;">Regresar</a>
    </article>