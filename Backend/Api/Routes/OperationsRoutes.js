const express = require('express');
const router = express.Router();

router.post('/operations', async function (req, res, next) {
    res.status(200).send(req.body);
});

router.get('/operations', async function (req, res) {
    try {
        res.status(200).send({ operations: [{ op: "test" }] });
    } catch (e) {
        res.status(422).send({ mensaje: e.message });
    }
});

module.exports = router;