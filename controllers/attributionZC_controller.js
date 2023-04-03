const attribution_model = require("../models/attributionZC_model.js")

function beauRendu (item){
    return {
        zone : {
            id : item.idZone,
            nom : item.nomZone,
            nbBenevoles : item.nbBenevoles
        },
        creneau : {
            id : item.idCreneau,
            heureDebut : item.heureDebut,
            heureFin : item.heureFin
        }
    }
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
        res.status(500).send({msg: "Problème sélection d'une attributione ZC par Zone"})
        console.error(error.message)
    })
}

function deleteAttributionZC(req, res) {

    const idZone = req.body.idZone
    const idCreneau = req.body.idCreneau

    promise = attribution_model.deleteAttributionZC(idZone,idCreneau)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'une attributione ZC"})
        console.error(error.message)
    })
}

function createAttributionZC(req, res) {

    const idZone = req.body.idZone
    const idCreneau = req.body.idCreneau

    promise = attribution_model.createAttributionZC(idZone,idCreneau)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème count bénévoles"})
        console.error(error.message)
    })
}

function countBenevoles(req, res) {

    const idCreneau = req.params.idCreneau

    promise = attribution_model.getCountBenevoles(idCreneau)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création d'une attributione ZC"})
        console.error(error.message)
    })
}


module.exports = {
    selectAttributionsByZone,
    deleteAttributionZC,
    createAttributionZC,
    countBenevoles
}