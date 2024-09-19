// Función para llenar los selects con los datos
const llenarCamposSelect = (id, datos) => {
    const campoSelect = document.getElementById(id)
    campoSelect.innerHTML = '<option value="">Seleccione una opción...</option>' 
    // Itera en cada dato y lo asigna a los campos de tipo Option
    datos.forEach(item => {
        const campoOption = document.createElement('option')
        campoOption.value = item.id 
        campoOption.textContent = item.name
        campoOption.setAttribute('precio', item.precio) 
        campoSelect.appendChild(campoOption)
    })
}

// Función para obtener los datos del servidor y llenar los selects
const CargarDatos = async () => {
    const respuesta = await fetch('/obtenerInformacion')
    const data = await respuesta.json()
    console.log(data);
    
    // Llena los selects con los datos
    llenarCamposSelect('mesero', data.meseros.map(mesero => ({ id: mesero.ID_MESERO, name: mesero.NOMBRE_MESERO })))
    llenarCamposSelect('producto_nombre', data.productos.map(producto => ({ id: producto.ID_PRODUCTO, name: producto.PRODUCTO_NOMBRE, precio: producto.PRECIO })))
    llenarCamposSelect('tipoCliente', data.tiposCliente.map(tipoCliente => ({ id: tipoCliente.ID_CLIENTE, name: tipoCliente.TIPO_CLIENTE })))
}

// Cargar los datos al cargar la página y ejecuta las funciones correspondientes
document.addEventListener('DOMContentLoaded', () => {
    CargarDatos()
})
