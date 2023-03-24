const creneau_model = require("../models/creneau_model")

function selectCreneaux(req, res) {

    promise = creneau_model.getCreneaux()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection des creneaux"})
        console.error(error.message)
    })
}
function selectCreneauById(req, res) {

    const id = req.params.id
    promise = creneau_model.getCreneau(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'un creneau"})
        console.error(error.message)
    })
}
function deleteCreneau(req, res) {

    promise = creneau_model.deleteCreneau(req.body.id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'un creneau"})
        console.error(error.message)
    })
}
function createCreneau(req, res) {

    promise = creneau_model.createCreneau(req.body.heureDebut,req.body.heureFin)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création d'un creneau"})
        console.error(error.message)
    })
}
function updateCreneauById(req, res) {

    promise = creneau_model.updateCreneau(req.body.heureDebut,req.body.heureFin,req.body.id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème mise à jour d'un creneau"})
        console.error(error.message)
    })
}

module.exports = {
    selectCreneaux,
    selectCreneauById,
    deleteCreneau,
    createCreneau,
    updateCreneauById,
}