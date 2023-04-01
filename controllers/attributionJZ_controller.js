const attribution_model = require("../models/attributionJZ_model.js")

function beauRendu (item){
    return {
        jour: {
            id : item.idJour,
            nom : item.nomJour,
            ouverture : item.ouverture,
            fermeture : item.fermeture
        },
        zone : {
            id : item.idZone,
            nom : item.nomZone,
            nbBenevole : item.nbBenevole
        }
    }
}

function selectAttributionsJZ(req, res) {

    promise = attribution_model.getAttributionsJZ()
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection des attributions JZ"})
        console.error(error.message)
    })
}

function selectAttributionsByZone(req, res) {

    const idZone = req.params.idZone
    promise = attribution_model.selectAttributionsByZone(idZone)
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attributione JZ par Zone"})
        console.error(error.message)
    })
}
function selectAttributionsByJour(req, res) {

    const idJour = req.params.idJour
    promise = attribution_model.selectAttributionsByJour(idJour)
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attributione JZ par Jour"})
        console.error(error.message)
    })
}

function deleteAttributionJZ(req, res) {

    const idJour = req.body.idJour
    const idZone = req.body.idZone

    promise = attribution_model.deleteAttributionJZ(idJour,idZone)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'une attributione JZ"})
        console.error(error.message)
    })
}

function createAttributionJZ(req, res) {

    const idJour = req.body.idJour
    const idZone = req.body.idZone

    promise = attribution_model.createAttributionJZ(idJour,idZone)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création d'une attributione JZ"})
        console.error(error.message)
    })
}


module.exports = {
    selectAttributionsJZ,
    selectAttributionsByZone,
    selectAttributionsByJour,
    deleteAttributionJZ,
    createAttributionJZ,
}