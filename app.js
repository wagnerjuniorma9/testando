const express = require('express');
const app = express();

const Pessoa = require('./models/Pessoa.model');
const Auth = require('./config/Auth/JWT');

const Connection = require('./config/connection/Connection');

app.get('/', (req, res) => {

    try {

        let conn = Connection();
        

    } catch (err) {
        console.log('xD')
        res.send(err)
        return;
    }

});

// Servidor Porta e Ip
const ip = 'localhost';
const porta = 3000;

app.listen(porta, ip, () => {
    console.log("------------------------");
    console.log('Servidor rodando');
    console.log(`IP: ${ip}`);
    console.log(`PORTA: ${porta}`);
    console.log("------------------------\n");
});