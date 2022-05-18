const { request } = require("express");
const { response } = require("express");
const { randomUUID } =  require("crypto")
const fs = require("fs")
const express = require("express");
const { json } = require("express/lib/response");
const app = express();
app.use(express.json())
let eventos = [];

app.post("/evento", (request,response)=> {
    const {titulo, descricao, local, midia} = request.body
    const evento = {
        id : randomUUID(), 
        titulo, 
        descricao,
        local,
        midia
    }
    eventos.push(evento);

 return response.json(evento)
})
app.get("/evento", (request,response)=>{
    return response.json(eventos)
})
app.get("/evento/:id", (request,response)=>{
    const {id} = request.params
    const evento = eventos.find(evento => evento.id === id) 
    return response.json(evento)
})
app.put("/evento/:id", (request,response)=>{
    const {id} = request.params
    const {titulo, descricao, local, midia} = request.body
    const eventoIndex = eventos.findIndex(evento => evento.id === id) 
    eventos[eventoIndex] = { 
        ...eventos[eventoIndex],
        titulo, 
        descricao,
        local,
        midia
    }
    return response.json({message : "Evento alterado com sucesso"})
})
app.delete("/evento/:id", (request,response)=>{
    const {id} = request.params
    const eventoIndex = eventos.findIndex(evento => evento.id === id) 
    eventos.splice(eventoIndex,1)
    return response.json({message : "Evento excluido com sucesso"})
})

app.listen(4001, ()=>console.log("Servidor rodando porta 4001"))
