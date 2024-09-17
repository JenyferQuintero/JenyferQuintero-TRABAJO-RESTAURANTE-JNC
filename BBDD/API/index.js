const path=require('path')
const express=require('express')
const body_Parser = require('body-parser');
const mysql2=require('mysql2/promise');
const { error } = require('console');



const app=express()
const puerto=3000

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true})) 
app.use(body_Parser.urlencoded({extended: true}))

app.use(body_Parser.json());


console.log(path.join(__dirname,'../PUBLIC'))
app.use('/',express.static(path.join(__dirname,'../PUBLIC')))


app.listen(puerto,()=>{
    console.log('Servidor Iniciado')
})
const db=mysql2.createPool({
    user:'root',
    database:'BBDD_RESTAURANTE',
    host:'localhost',
    password:''

})

app.post('/login',async(req,res)=>{
    const{nombre_mesero, contrasena}=req.body
 console.log(nombre_mesero, contrasena)
    try{
        const contrasena1=parseInt(contrasena)
        const [filas]=await db.query('SELECT * FROM MESERO WHERE NOMBRE_MESERO=? AND CONTRASENA=?',[nombre_mesero, contrasena1])
      if(filas.length > 0){
        res.sendFile(path.join(__dirname,'../PUBLIC/indexorden.html')) 
      } else {
        res.status(401).json({Error: 'Inicio de Sesión Incorrecta'})

        res.sendFile(path.join(__dirname,'../PUBLIC/errorinicio.html')) 
       
      }
      

    }
    catch(error){
        console.error('Error de datos', error)
    }
})






