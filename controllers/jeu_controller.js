const jeu_model = require("../models/jeu_model")

function selectJeux(req, res) {

    promise = jeu_model.getJeux()
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
function selectJeuById(req, res) {

    const id = req.params.id
    promise = jeu_model.getJeu(id)
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
function deleteJeu(req, res) {

    promise = jeu_model.deleteJeu(req.body.idJeu)
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
function createJeu(req, res) {

    promise = jeu_model.createJeu(req.body.idType,req.body.nom)
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
function updateJeuById(req, res) {

    promise = jeu_model.updateJeu(req.body.idType,req.body.nom,req.body.idJeu)
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
    selectJeux,
    selectJeuById,
    deleteJeu,
    createJeu,
    updateJeuById,
}