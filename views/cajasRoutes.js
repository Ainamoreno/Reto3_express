const express = require('express');
const { json } = require('sequelize');
const router = express.Router()

const Cajas = require('../models/cajas');

router.get('/', async (req, res) => {
    let resp = await Cajas.findAll()
    res.send(resp)
});

router.post('/newCaja', async (req, res) => {
    try {
        let data = req.body;
        let resp = await Cajas.create({
            contenido: data.contenido,
            valor: data.valor,
            almacenId: data.almacenId
        })
        console.log('Registro creado con exito')
        res.send(resp)
    } catch (err) {
        res.send(`El registro no ha podido ser creado`)
    }

});

router.put('/modiCaja', async (req, res) => {
    try {
        let data = req.body
        let resp = await Cajas.update(
            {
                contenido: data.contenido,
                valor: data.valor,
                almacenId: data.almacenId
            },
            {
                where: { cajaId: data.cajaId }
            }
        )
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
});

router.delete('/delCaja/:cajaId', async (req, res) => {
    try {
        let data = req.params.cajaId;
        let resp = await Cajas.destroy({
            where: { cajaId: data }
        })
        if(resp == 1){
            res.send('Registro eliminado!')
        }
    } catch (err) {
        res.send(err)
    }
})

module.exports = router