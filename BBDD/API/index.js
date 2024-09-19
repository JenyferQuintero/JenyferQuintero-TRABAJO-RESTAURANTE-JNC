const path = require('path')
const express = require('express')
const body_Parser = require('body-parser');
const mysql2 = require('mysql2/promise');
const MySQL = require('./mysql')

const app = express()
const mySQL = new MySQL()
const puerto = 3000

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(body_Parser.urlencoded({ extended: true }))

app.use(body_Parser.json());


console.log(path.join(__dirname, '../PUBLIC'))
app.use('/', express.static(path.join(__dirname, '../PUBLIC')))


app.listen(puerto, () => {
  console.log('Servidor Iniciado')
})
const db = mysql2.createPool({
  user: 'root',
  database: 'BBDD_RESTAURANTE',
  host: 'localhost',
  password: ''

})


app.get('/obtenerInformacion', async (req, res) => {
  try {
    const meseros = await mySQL.executeQuery('SELECT * FROM Mesero')
    const tipoCliente = await mySQL.executeQuery('SELECT * FROM Cliente')
    const productos  = await mySQL.executeQuery('SELECT * FROM Producto')
    res.json({
      'meseros': meseros,
      'tiposCliente': tipoCliente,
      'productos': productos
    })

    
  } catch (error) {
    
  }
})

app.post('/login', async (req, res) => {
  const { nombre_mesero, contrasena } = req.body
  try {
    const contrasena1 = parseInt(contrasena)
    const [filas] = await db.query('SELECT * FROM MESERO WHERE NOMBRE_MESERO=? AND CONTRASENA=?', [nombre_mesero, contrasena1])
    if (filas.length > 0) {
      res.sendFile(path.join(__dirname, '../PUBLIC/indexorden.html'))
    } else {
      res.sendFile(path.join(__dirname, '../PUBLIC/errorinicio.html'))
     
      }

 }
  catch (error) {
    console.error('Error de datos', error)
  }
})

/*orden*/

app.post('/agregar-producto',async (req, res) => {
  try {
    const { mesero, mesa, tipoCliente, producto_nombre } = req.body;
    const fecha = new Date()
    // const mesaInt = parseInt(mesa)
    const propina = 0.10
    const resultadoOrden = await mySQL.executeQuery('INSERT INTO Orden(FECHA_HORA, MESA, PROPINA, ID_MESERO, ID_CLIENTE) VALUES (?,?,?,?,?)', [fecha, mesa, propina, mesero, tipoCliente])
    const ordenId = resultadoOrden.insertId
    await mySQL.executeQuery('INSERT INTO Orden_Producto(ID_ORDEN, ID_PRODUCTO) VALUES (?,?)', [ordenId, producto_nombre])

    const resultadoFinal = await mySQL.executeQuery(`
    SELECT 
        Orden.Id_Orden AS id,
        Orden.Fecha_Hora AS Fecha,
        Orden.Mesa AS mesa,
        Orden.Propina AS propina,
        Mesero.Nombre_Mesero AS mesero,
        Cliente.Tipo_Cliente AS tipo_de_cliente,
        producto.Producto_Nombre AS producto
    FROM 
        Orden
    INNER JOIN Mesero ON Orden.Id_Mesero = Mesero.ID_Mesero
    INNER JOIN orden_producto on orden.Id_orden= orden_producto.Id_Orden
    INNER join producto on orden_producto.ID_producto = producto.ID_producto
    INNER JOIN Cliente ON Orden.ID_cliente = Cliente.id_cliente 
    WHERE Orden.ID_orden= ${ordenId}`)

    res.json({
      ordenGenerada: resultadoFinal
    })
    }
    catch(error){
        console.error('Error de datos', error)
    }

}) 





  










