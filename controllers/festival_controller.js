const festival_model = require("../models/festival_model")

function selectFestivals(req, res) {

    promise = festival_model.getFestivals()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection des festivals"})
        console.error(error.message)
    })
}
function selectFestivalById(req, res) {

    const id = req.params.id
    promise = festival_model.getFestival(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une festival"})
        console.error(error.message)
    })
}
function deleteFestival(req, res) {

    promise = festival_model.deleteFestival(req.body.id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'une festival"})
        console.error(error.message)
    })
}
function createFestival(req, res) {

    promise = festival_model.createFestival(req.body.nom)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création d'une festival"})
        console.error(error.message)
    })
}
function updateFestivalById(req, res) {

    promise = festival_model.updateFestival(req.body.nom,req.body.id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème mise à jour d'une festival"})
        console.error(error.message)
    })
}

module.exports = {
    selectFestivals,
    selectFestivalById,
    deleteFestival,
    createFestival,
    updateFestivalById,
}