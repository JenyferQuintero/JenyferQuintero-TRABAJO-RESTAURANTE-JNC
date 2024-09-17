const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#input-control');


const validaFormulario =(e) =>{
    switch (e.targert.name) {
        case "usuario":
            if(expresiones.usuario.test("e.target.value")){
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorecto');
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-corecto');
                document.querySelectorAll('#grupo__usuario i').classList.remove('fa-times-circle');
                

            } else {
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorecto');
            }
        break;

        case "password":
        break;

    }


}
inputs.forEach((input) {
    input.addEventListener('keyup', validaFormulario);
    input.addEventListener('blur', validaFormulario);
   
})


formulario.addEventListener('submit', (e) )