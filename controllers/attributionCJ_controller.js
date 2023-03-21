const attribution_model = require("../models/attributionCJ_model.js")

function beauRendu (item){
    return {
        jour: {
            id : item.idJour,
            nom : item.nom,
            ouverture : item.ouverture,
            fermeture : item.fermeture
        },
        creneau : {
            id: item.idCreneau,
            dateDebut :item.dateDebut, 
            dateFin : item.dateFin
        }
    }
}

function selectAttributionsCJ(req, res) {

    promise = attribution_model.getAttributionsCJ()
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection des attributions CJ"})
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
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attributione CJ par Jour"})
        console.error(error.message)
    })
}
function selectAttributionsByCreneau(req, res) {

    const idCreneau = req.params.idCreneau
    promise = attribution_model.selectAttributionsByCreneau(idCreneau)
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attributione CJ par Creneau"})
        console.error(error.message)
    })
}

function selectAttributionsByAll(req, res) {

    const idCreneau = req.body.idCreneau
    const idJour = req.body.idJour

    promise = attribution_model.getAttributionsByAll(idCreneau,idJour)
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attributione CJ par tout"})
        console.error(error.message)
    })
}

function deleteAttributionCJ(req, res) {

    const idCreneau = req.body.idCreneau
    const idJour = req.body.idJour

    promise = attribution_model.deleteAttributionCJ(idCreneau,idJour)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'une attributione CJ"})
        console.error(error.message)
    })
}

function createAttributionCJ(req, res) {

    const idCreneau = req.body.idCreneau
    const idJour = req.body.idJour

    promise = attribution_model.createAttributionCJ(idCreneau,idJour)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création d'une attributione CJ"})
        console.error(error.message)
    })
}


module.exports = {
    selectAttributionsCJ,
    selectAttributionsByJour,
    selectAttributionsByCreneau,
    selectAttributionsByAll,
    deleteAttributionCJ,
    createAttributionCJ,
}