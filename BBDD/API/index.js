const path=require('path')
const express=require('express')
console.log(__dirname)

const app=express()
const puerto=3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('../PUBLIC',express.static(path.join(__dirname,'../indexlogin.html')))


app.listen(puerto,()=>{
    console.log('Servidor Iniciado')
})

app.post('/login',(req,res)=>{
    console.log(req,body)

})
