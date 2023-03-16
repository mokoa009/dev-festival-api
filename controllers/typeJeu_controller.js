const typeJeu_model = require("../models/typeJeu_model")

function selectTypeJeux(req, res) {

    promise = typeJeu_model.getTypeJeux()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function selectTypeJeuById(req, res) {
    const id = req.params.id
    promise = typeJeu_model.getTypeJeu(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function deleteTypeJeu(req, res) {

    promise = typeJeu_model.deleteTypeJeu(req.body.idType)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function createTypeJeu(req, res) {

    promise = typeJeu_model.createTypeJeu(req.body.nom)
    promise.then(
        (values) => {
            res.status(201).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function updateTypeJeuById(req, res) {
    
    promise = typeJeu_model.updateTypeJeu(req.body.nom,req.body.idType)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })   
}
module.exports = {
    selectTypeJeux,
    selectTypeJeuById,
    deleteTypeJeu,
    createTypeJeu,
    updateTypeJeuById,
}