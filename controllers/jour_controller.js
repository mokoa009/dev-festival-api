const jour_model = require("../models/jour_model")

function selectJours(req, res) {

    promise = jour_model.getJours()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection des jours"})
        console.error(error.message)
    })
}
function selectJourById(req, res) {

    const id = req.params.id
    promise = jour_model.getJour(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une jour"})
        console.error(error.message)
    })
}
function deleteJour(req, res) {

    promise = jour_model.deleteJour(req.body.id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'une jour"})
        console.error(error.message)
    })
}
function createJour(req, res) {

    promise = jour_model.createJour(req.body.nom,req.body.ouverture,req.body.fermeture)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création d'une jour"})
        console.error(error.message)
    })
}
function updateJourById(req, res) {

    promise = jour_model.updateJour(req.body.nom,req.body.ouverture,req.body.fermeture,req.body.id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème mise à jour d'une jour"})
        console.error(error.message)
    })
}

module.exports = {
    selectJours,
    selectJourById,
    deleteJour,
    createJour,
    updateJourById,
}