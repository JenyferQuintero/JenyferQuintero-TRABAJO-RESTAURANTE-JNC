const path =require('path')
const mysql=require('mysql')
const express=require('express')
console.log(__dirname)

const app=express()

const puerto=3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))	

app.use('/',express.static(path.join(__dirname,'../RESTAURANTE')))

//conexion a BBDD//

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    port: 3306,
    database:'bbdd_restaurante'
})

//escuche el puerto 3000//

app.listen(puerto,()=>{
    console.log('Servidor Iniciado')
})

app.post('/inicioSesion',(req,res)=>{
    const {usuario}=req.body 
    const password=req.body.password
    console.log(password);
 res.json({'usuario':usuario,'respuesta':'inicio de sesion exitosa'})

})





