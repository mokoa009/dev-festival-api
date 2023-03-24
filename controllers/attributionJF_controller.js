const attribution_model = require("../models/attributionJF_model.js")

function beauRendu (item){
    return {
        jour: {
            id : item.idJour,
            nom : item.nom,
            ouverture : item.ouverture,
            fermeture : item.fermeture
        },
        festival : {
            id : item.idFestival,
            nom : item.nomFestival,
            cloture : item.cloture
        }
    }
}

function selectAttributionsJF(req, res) {

    promise = attribution_model.getAttributionsJF()
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
        res.status(500).send({msg: "Problème sélection des attributions JF"})
        console.error(error.message)
    })
}

function selectAttributionsByFestival(req, res) {

    const idFestival = req.params.idFestival
    promise = attribution_model.selectAttributionsByFestival(idFestival)
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
        res.status(500).send({msg: "Problème sélection d'une attributione JF par Festival"})
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
        res.status(500).send({msg: "Problème sélection d'une attributione JF par Jour"})
        console.error(error.message)
    })
}

function selectAttributionsByAll(req, res) {

    const idJour = req.body.idJour
    const idFestival = req.body.idFestival

    promise = attribution_model.getAttributionsByAll(idJour,idFestival)
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
        res.status(500).send({msg: "Problème sélection d'une attributione JF par tout"})
        console.error(error.message)
    })
}

function deleteAttributionJF(req, res) {

    const idJour = req.body.idJour
    const idFestival = req.body.idFestival

    promise = attribution_model.deleteAttributionJF(idJour,idFestival)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'une attributione JF"})
        console.error(error.message)
    })
}

function createAttributionJF(req, res) {

    const idJour = req.body.idJour
    const idFestival = req.body.idFestival

    promise = attribution_model.createAttributionJF(idJour,idFestival)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création d'une attributione JF"})
        console.error(error.message)
    })
}


module.exports = {
    selectAttributionsJF,
    selectAttributionsByFestival,
    selectAttributionsByJour,
    selectAttributionsByAll,
    deleteAttributionJF,
    createAttributionJF,
}