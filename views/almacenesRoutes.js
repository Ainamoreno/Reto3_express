const express = require('express');
const router = express.Router()

const Almacenes = require('../models/almacenes');


router.get('/', async (req, res) => {
    let resp = await Almacenes.findAll()
    res.send(resp)
});

router.post('/newAlm', async (req, res) => {
    try {
        let data = req.body;
        let resp = await Almacenes.create({
            lugar: data.lugar,
            capacidad: data.capacidad
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }


});

router.put('/modiAlm', async (req, res) => {
    try {
        let data = req.body
        let resp = await Almacenes.update(
            {
                lugar: data.lugar,
                capacidad: data.capacidad
            },
            {
                where: { almacenId: data.almacenId }
            }
        )
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
});

router.delete('/delAlm', async (req, res) => {
    try {
        let data = req.body;
        let resp = await Almacenes.destroy({
            where: { almacenId: data.almacenId }
        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }
})

module.exports = router