const express = require('express');
const router = express.Router();
const Provider = require(process.cwd() + '\\Core\\Services\\Provider.js');
const provider = Provider.getInstance();

router.post('/operations', async function (req, res, next) {
    try {
        const operation = await provider.opreationService().addOperation(req.body);
        res.status(200).send({message : "operation succsesfully added (ID : " + operation.id + ")"});
    } catch (e) {
        res.status(422).send({ message: e.message });
    }
});

router.get('/operations', async function (req, res) {
    try {
        const operations = await provider.opreationService().getOperations();
        res.status(200).send(operations);
    } catch (e) {
        res.status(422).send({ message: e.message });
    }
});


router.delete('/operations', async function(req, res) {
    try{
        await provider.opreationService().deleteOperation(req.body.operationId);
        res.status(200).send({message : "Operation succesfully deleted"});
    } catch (e) {
        res.status(422).send({message : e.message});
    }
})

router.put('/operations', async function(req, res) {
    try{
        const operation = await provider.opreationService().updateOperation(req.body);
        res.status(200).send({
            message : "Operation succesfullt updated",
            operation : operation    
        })
    } catch (e) {
        res.status(422).send({message : e.message});
    }
})

module.exports = router;