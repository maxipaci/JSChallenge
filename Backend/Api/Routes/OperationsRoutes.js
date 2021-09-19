const express = require('express');
const router = express.Router();
const Provider = require(process.cwd() + '\\Core\\Services\\Provider.js');
const provider = Provider.getInstance();

router.post('/operations', async function (req, res, next) {
    res.status(200).send(req.body);
});

router.get('/operations', async function (req, res) {
    try {
        const operations = await provider.opreationService().getOperations();
        res.status(200).send(operations);
    } catch (e) {
        res.status(422).send({ mensaje: e.message });
    }
});

module.exports = router;